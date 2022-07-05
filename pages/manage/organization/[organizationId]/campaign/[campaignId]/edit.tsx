import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import {
  Campaign,
  UpdateCampaignDetailMutationVariables,
  useFindOneCampaignByIdQuery,
  useFindOneOrganizationByIdQuery,
  usePurgeCampaignMutation,
  useUpdateCampaignDetailMutation,
  UploadImageMutationVariables,
  useUpdateCampaignImagesMutation,
  useUploadImageMutation,
  UpdateCampaignImagesMutationVariables,
} from '@generated/graphql';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { Container, Skeleton } from '@mui/material';
import { getOrgDashboardPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
// components
import Page from '@components/Page';
import {
  CampaignEditForm,
  NewCampaignValues,
} from '@modules/fundraising/components/CampaignEditForm';
import { CampaignMethod } from '@modules/fundraising/Campaign';
import { CustomFile } from '@components/upload/UploadMultiFile';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

export default function CampaignDetailPage() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const organizationId = router.query.organizationId! as string;
  const campaignId = router.query.campaignId! as string;
  const paths = getOrgDashboardPaths(organizationId);
  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });
  const [campaignRes] = useFindOneCampaignByIdQuery({
    variables: { organizationId, campaignId },
  });

  const [, updateCampaignDetail] = useUpdateCampaignDetailMutation();
  const [, purgeCampaign] = usePurgeCampaignMutation();
  const [, uploadImage] = useUploadImageMutation();
  const [, updateCampaignImages] = useUpdateCampaignImagesMutation();

  const makeId = (length: number) => {
    // https://stackoverflow.com/a/65315426/122441
    return Math.random().toString().substr(2, length);
  };

  const getBase64 = async (file: CustomFile) => {
    const src = await new Promise<string>(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const encoded = reader.result!.toString().replace(/^data:(.*,)?/, '');
        // var data = reader.result!.replace;
        // Hendy's note: should not need to pad anything!
        // if (encoded.length % 4 > 0) {
        //   encoded += '='.repeat(4 - (encoded.length % 4));
        // }
        // var buf = Buffer.from(encoded, 'base64');
        resolve(encoded);
        // console.log('encoded result =',encoded)
      };
    });
    return src;
  };

  const onSubmit = async (values: NewCampaignValues) => {
    // FIXME: Support add/delete images
    // FIXME: Support set cover image
    const vars: UpdateCampaignDetailMutationVariables = {
      organizationId,
      campaignId,
      title: values.title,
      updatedAt: new Date(),
      description: values.description,
      islamCharityType: values.islamCharityType,
      methods: values.methods.map(it => CampaignMethod[it]),
      amountTarget: values.amountTarget,
      marketingPlanEnabled: values.marketingPlanEnabled,
      marketingPlan: values.marketingPlan || '',
      isPublished: values.publish ? 'Y' : 'N' || 'N',
    };
    console.info('Updating campaign', campaignId, '...', vars);
    const resp = await updateCampaignDetail(vars);
    console.debug('Campaign updated:', resp);
    if (resp.error) {
      console.error('Cannot update campaign', vars, 'error:', resp.error);
      alert(`Error saving campaign ${vars.title}: ${resp.error?.message}`);
      return;
    }

    const uploadedImagePaths: string[] = [];
    for (const image of values.images) {
      if (image?.name) {
        const imageExtension = `.${image.name.split('.').pop()}`;
        const imageUrl = await getBase64(image);
        const imageName = `${campaignId}-${makeId(4)}` || '';
        const uploadImageVars: UploadImageMutationVariables = {
          imageUrl,
          imageName,
          imagePrefix: 'campaign-image/',
          fullName: values.title,
          imageExtension,
          currentPhoto: '',
        };
        console.debug('Uploading image...', imageName);
        const uploadedImage = await uploadImage(uploadImageVars);
        if (uploadedImage.data?.uploadImage) {
          console.debug('Image uploaded:', uploadedImage.data.uploadImage);
          uploadedImagePaths.push(uploadedImage.data.uploadImage!.path!);
        } else {
          console.error('Error uploading image', image.name, ':', uploadedImage.error?.message);
          alert(`Error uploading image ${imageName}`);
          return;
        }
      }
    }

    if (uploadedImagePaths.length >= 1) {
      console.debug(`Updating campaign ${campaignId} images:`, uploadedImagePaths);
      const existingImages = values.images.filter(x => x.isEdited);
      let updatedImages = uploadedImagePaths;
      if (existingImages.length > 0) {
        const existingImagePaths: string[] = existingImages.map(x =>
          x?.preview?.replace(`${publicRuntimeConfig.bunny.cdn.urlMedia}/`, ''),
        ) as string[];
        updatedImages = [...existingImagePaths, ...uploadedImagePaths];
      }
      const updateCampaignImagesVars: UpdateCampaignImagesMutationVariables = {
        _id: campaignId,
        images: updatedImages,
        coverImage: updatedImages.length >= 1 ? updatedImages[0] : undefined,
        coverImageIndex: updatedImages.length >= 1 ? 0 : undefined,
      };
      const updated = await updateCampaignImages(updateCampaignImagesVars);
      console.debug('Successfully updated campaign', campaignId, 'images:', updatedImages);
    } else if (values.images) {
      const existingImages = values.images.filter(x => x.isEdited);
      const existingImagePaths: string[] = existingImages.map(x =>
        x?.preview?.replace(`${publicRuntimeConfig.bunny.cdn.urlMedia}/`, ''),
      ) as string[];
      const updateCampaignImagesVars: UpdateCampaignImagesMutationVariables = {
        _id: campaignId,
        images: existingImagePaths,
        coverImage: existingImagePaths.length >= 1 ? existingImagePaths[0] : undefined,
        coverImageIndex: existingImagePaths.length >= 1 ? 0 : undefined,
      };
      await updateCampaignImages(updateCampaignImagesVars);
    }
    router.push(paths.campaigns);
  };

  const onDelete = async () => {
    console.info('Purging campaign', campaignId, '...');
    const resp = await purgeCampaign({ organizationId, campaignId });
    if (resp.error) {
      console.error('Cannot purge campaign', campaignId, 'error:', resp.error);
      alert(`Error deleting campaign ${campaignId}: ${resp.error?.message}`);
      return;
    }
    router.push(paths.campaigns);
  };

  if (!organizationRes.data?.organization || !campaignRes.data?.campaign) {
    return (
      <OrgDashboardLayout organization={organizationRes?.data?.organization}>
        <Skeleton variant="rectangular" height={200} />
      </OrgDashboardLayout>
    );
  }

  return (
    <OrgDashboardLayout organization={organizationRes.data.organization}>
      <Page
        title={`${campaignRes.data.campaign.title} - ${
          organizationRes.data.organization.name ?? '...'
        } | ${t('app.name')}`}
      >
        <Container maxWidth="xl">
          <HeaderBreadcrumbs
            heading={`${campaignRes.data.campaign.title}`}
            links={[
              { name: t('core.menu.overview'), href: paths.overview },
              { name: t('fundraising.campaign.campaigns'), href: paths.campaigns },
              {
                name: campaignRes.data.campaign.title ?? '',
                href: paths.campaignsDetail(campaignId),
              },
              { name: 'Edit' },
            ]}
          />

          <CampaignEditForm
            organization={organizationRes.data?.organization}
            initialValue={campaignRes.data.campaign as Campaign}
            onSubmit={onSubmit}
            onDelete={onDelete}
            isNew={false}
          />
        </Container>
      </Page>
    </OrgDashboardLayout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
