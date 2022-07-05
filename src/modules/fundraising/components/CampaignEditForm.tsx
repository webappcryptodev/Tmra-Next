/* eslint-disable @typescript-eslint/no-unused-vars */
import { UploadMultiFile } from '@components/upload';
import { CustomFile } from '@components/upload/UploadMultiFile';
import { CampaignMethod, IslamCharityType } from '@modules/fundraising/Campaign';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Card,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
  Autocomplete,
  Dialog,
  DialogContent,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { default as React, useCallback, useEffect, useState } from 'react';
import {
  Control,
  Controller,
  useForm,
  UseFormGetValues,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { getActiveCurrencies } from '@modules/geo/Currency';
import { Campaign, CampaignIslamCharityType } from '@generated/graphql';
import { ConfirmDeleteDialog } from '@modules/core/components/ConfirmDeleteDialog';

import { QuillEditor } from '@components/editor';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import Iconify from '@components/Iconify';

const LabelStyle = styled(Typography)(({ theme }) => ({
  // WORKAROUND before migrating to Minimal 2.7.0+
  ...theme.typography.subtitle2,
  // fontWeight: 600,
  // lineHeight: 22 / 14,
  // fontSize: pxToRem(14),
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export interface NewCampaignValues {
  title: string;
  description: string;
  islamCharityType: CampaignIslamCharityType;
  methods: string[];
  currencyCode: string;
  amountTarget: string;
  // totalDonationStr: string;
  marketingPlanEnabled: boolean;
  marketingPlan: string;
  // donationPlaces: string[];
  // contributionValueStr: string;
  // numberOfBeneficiariesStr: string;
  // costPerBeneficiaryStr: string;
  startDate: string;
  endDate: string;
  images: CustomFile[];
  publish: boolean;
}

export interface OrganizationInfo {
  defaultCurrency?: string | null;
}

export interface CampaignEditFormProps {
  organization: OrganizationInfo;
  initialValue?: Campaign;
  onSubmit: (values: NewCampaignValues) => Promise<void>;
  onDelete?: () => Promise<void>;
  isNew: boolean;
}

export function CampaignImagesField({
  control,
  setValue,
  getValues,
}: {
  control: Control<NewCampaignValues>;
  setValue: UseFormSetValue<NewCampaignValues>;
  getValues: UseFormGetValues<NewCampaignValues>;
}) {
  const { t, i18n } = useTranslation();

  const handleDrop = useCallback<(acceptedFiles: File[]) => void>(
    acceptedFiles => {
      const newImages = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );
      setValue('images', [...getValues('images'), ...newImages]);
      console.debug('images=', newImages);
    },
    [setValue],
  );
  const handleRemoveAll = () => {
    setValue('images', []);
    console.debug('images=', []);
  };
  const handleRemove = (file: File | string) => {
    const filteredItems = getValues('images').filter(_file => _file !== file);
    setValue('images', filteredItems);
    console.debug('images=', filteredItems);
  };

  return (
    <>
      <LabelStyle>{t('core.images')}</LabelStyle>
      <Controller
        name="images"
        control={control}
        render={({ field, fieldState }) => (
          <UploadMultiFile
            hideUploadButton={true}
            showPreview
            maxSize={3145728}
            accept="image/*"
            files={field.value}
            onDrop={handleDrop}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
            error={Boolean(fieldState.invalid && fieldState.error)}
          />
        )}
      />
    </>
  );
}

export function CampaignEditForm({
  organization,
  initialValue,
  onSubmit,
  onDelete,
  isNew,
}: CampaignEditFormProps) {
  // const router = useRouter();
  const { t, i18n } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const { handleSubmit, control, setValue, getValues, formState } = useForm<NewCampaignValues>({
    defaultValues: {
      title: initialValue?.title ?? '',
      description: initialValue?.description ?? '',
      images:
        !isNew && initialValue?.images?.length
          ? (initialValue?.images?.map(x => ({
              preview: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${x}`,
              isEdited: true,
            })) as CustomFile[])
          : [],
      islamCharityType: initialValue?.islamCharityType ?? CampaignIslamCharityType.Infaq,
      methods: initialValue?.methods?.map(it => it!) ?? [],
      currencyCode: initialValue?.currencyCode ?? organization?.defaultCurrency ?? 'USD',
      amountTarget: initialValue?.amountTarget,
      marketingPlanEnabled: initialValue?.marketingPlanEnabled ?? false,
      marketingPlan: initialValue?.marketingPlan ?? undefined,
      publish: Boolean(initialValue?.isPublished),
    },
  });
  const [currencyFormat, setCurrencyFormat] = useState('');
  // useEffect(() => {
  //   if (organization?.defaultCurrency) {
  //     setValue('currencyCode', organization?.defaultCurrency);
  //   }
  // }, [organization?.defaultCurrency]);

  const selectedCurrency = useWatch({ control, name: 'currencyCode' });

  useEffect(() => {
    const symbol = new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: selectedCurrency ?? 'USD',
    });
    setCurrencyFormat(symbol.format(0).replace(/\d/g, ''));
  }, [selectedCurrency]);

  const activeCurrencies = getActiveCurrencies();
  const currencyNames = new Intl.DisplayNames(i18n.language, { type: 'currency' });
  // const currencyNames = { of: code => code };
  // const selectedCurrency = 'SAR';

  const marketingPlanEnabled = useWatch({ control, name: 'marketingPlanEnabled' });
  const [submitting, setSubmitting] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const onDeleteWrapper = async () => {
    setDeleting(true);
    try {
      if (onDelete) {
        await onDelete();
      }
      setDeleteDialogOpen(false);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <Controller
                name="title"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    label={t('fundraising.campaign.campaign_title')}
                    {...field}
                    error={Boolean(fieldState.invalid && fieldState.error)}
                  />
                )}
              />
              <div>
                <LabelStyle>Description</LabelStyle>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState: { error } }) => (
                    <QuillEditor
                      id="description"
                      value={field.value}
                      onChange={field.onChange}
                      error={!!error}
                    />
                  )}
                />
              </div>

              <div>
                <CampaignImagesField control={control} setValue={setValue} getValues={getValues} />
              </div>

              <Controller
                name="marketingPlanEnabled"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControlLabel
                    control={<Switch checked={field.value} onChange={field.onChange} />}
                    label={t('fundraising.campaign.marketing_plan_enabled')}
                  />
                )}
              />

              {marketingPlanEnabled && (
                <Controller
                  name="marketingPlan"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      minRows={10}
                      label={t('fundraising.campaign.marketing_plan')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              )}
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <div>
                <FormControlLabel
                  control={
                    <Controller
                      name="publish"
                      control={control}
                      render={({ field }) => <Switch {...field} checked={field.value} />}
                    />
                  }
                  label="Publish"
                  labelPlacement="start"
                  sx={{ mb: 1, mx: 0, width: 1, justifyContent: 'space-between' }}
                />
              </div>

              <Controller
                name="islamCharityType"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <FormControl>
                    <InputLabel id="fundraising-campaign-islamCharityType-label">
                      {t('fundraising.campaign.islam_charity_type')}
                    </InputLabel>
                    <Select
                      labelId="fundraising-campaign-islamCharityType-label"
                      label={t('fundraising.campaign.islam_charity_type')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    >
                      {Object.values(CampaignIslamCharityType).map(key => (
                        <MenuItem key={key} value={key}>
                          {t(`fundraising.campaign.IslamCharityType.${key}`)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
              <Controller
                name="methods"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <FormControl>
                    <Autocomplete
                      multiple
                      freeSolo
                      onChange={(event, newValue) => field.onChange(newValue)}
                      options={Object.keys(CampaignMethod).map(option => option)}
                      getOptionLabel={option =>
                        `${t(`fundraising.campaign.CampaignMethod.${option}`)}`
                      }
                      defaultValue={field.value}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            {...getTagProps({ index })}
                            key={option}
                            size="small"
                            label={`${t(`fundraising.campaign.CampaignMethod.${option}`)}`}
                          />
                        ))
                      }
                      renderInput={params => (
                        <TextField
                          error={Boolean(fieldState.invalid && fieldState.error)}
                          label={t('fundraising.campaign.methods')}
                          {...params}
                        />
                      )}
                    />
                    {fieldState.invalid && fieldState.error && (
                      <FormHelperText error>
                        {t('fundraising.campaign.methods.error')}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
              <Controller
                name="currencyCode"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth>
                    <InputLabel id="fundraising-campaign-currency-label">
                      {t('fundraising.campaign.currency')}
                    </InputLabel>
                    <Select
                      labelId="fundraising-campaign-currency-label"
                      label={t('fundraising.campaign.currency')}
                      disabled={!isNew}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    >
                      {activeCurrencies.map(currency => (
                        <MenuItem key={currency.code} value={currency.code}>
                          {currencyNames.of(currency.code)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
              <Controller
                name="amountTarget"
                control={control}
                rules={{ required: true, pattern: /\d+/, min: 0 }}
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    label={t('fundraising.campaign.amount_target')}
                    inputProps={{
                      inputMode: 'numeric',
                      pattern: '[0-9]*',
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{currencyFormat}</InputAdornment>
                      ),
                    }}
                    {...field}
                    error={Boolean(fieldState.invalid && fieldState.error)}
                    helperText={
                      fieldState.invalid &&
                      fieldState.error &&
                      t('fundraising.campaign.amountTarget.error')
                    }
                  />
                )}
              />
            </Stack>
          </Card>

          <Stack direction="column" spacing={2} sx={{ mt: 4 }}>
            <LoadingButton
              loading={formState.isSubmitting || deleting}
              type="submit"
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              size="medium"
            >
              {isNew && t('fundraising.campaign.create')}
              {!isNew && t('fundraising.campaign.save')}
            </LoadingButton>
            {onDelete && (
              <LoadingButton
                loading={formState.isSubmitting || deleting}
                type="button"
                variant="contained"
                onClick={() => setDeleteDialogOpen(true)}
                size="medium"
                color="error"
              >
                {t('fundraising.campaign.delete')}
              </LoadingButton>
            )}
          </Stack>
        </Grid>
      </Grid>
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">{description}</DialogContentText> */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Iconify icon="akar-icons:info-fill" sx={{ width: 50, height: 50 }} />
            <Typography variant="h5" sx={{ flex: 1, marginLeft: 2 }}>
              Are you sure you want to delete this campaign?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end" alignItems="center" mt={1.5}>
            <Button variant="contained" onClick={() => setDeleteDialogOpen(false)} autoFocus>
              No
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={onDeleteWrapper}
              sx={{ marginLeft: 1.5 }}
            >
              Yes!
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </form>
  );
}
