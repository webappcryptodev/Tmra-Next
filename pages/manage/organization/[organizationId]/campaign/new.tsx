import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import { CustomFile } from '@components/upload/UploadMultiFile';
import {
  InsertCampaignMutationVariables,
  UpdateCampaignImagesMutationVariables,
  UploadImageMutationVariables,
  useFindOneOrganizationByIdQuery,
  useInsertCampaignMutation,
  useUpdateCampaignImagesMutation,
  useUploadImageMutation,
} from '@generated/graphql';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { CampaignMethod } from '@modules/fundraising/Campaign';
import {
  CampaignEditForm,
  NewCampaignValues,
} from '@modules/fundraising/components/CampaignEditForm';
import { Container, Skeleton } from '@mui/material';
import { app } from '@redux/slices/auth/realm';
import { getOrgDashboardPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
// components
import Page from 'src/components/Page';

function makeId(length: number) {
  // https://stackoverflow.com/a/65315426/122441
  return Math.random().toString().substr(2, length);
}

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

export default function CampaignNew() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const organizationId = router.query.organizationId! as string;

  const paths = getOrgDashboardPaths(organizationId);

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });
  console.log('organization:', organizationRes.data?.organization);

  const [, insertOneCampaign] = useInsertCampaignMutation();
  const [, uploadImage] = useUploadImageMutation();
  const [, updateCampaignImages] = useUpdateCampaignImagesMutation();
  const onSubmit = async (values: NewCampaignValues) => {
    console.debug('Campaign images:', values.images);
    for (const image of values.images) {
      if (!['image/png', 'image/jpeg'].includes(image.type)) {
        window.alert(`The allowed type file is PNG/JPEG`);
        return;
      }
    }

    const rand = makeId(4);
    // const fullName = `${`${data.user.firstname} ${data.user.lastname}`}`;
    const insertCampaignVars: InsertCampaignMutationVariables = {
      organizationId,
      title: values.title,
      createdAt: new Date(),
      creatorUserId: app.currentUser!.profile.ssoId as string,
      description: values.description,
      islamCharityType: values.islamCharityType,
      methods: values.methods.map(it => CampaignMethod[it]),
      currencyCode: values.currencyCode,
      amountTarget: values.amountTarget,
      // fill with empty first
      // images: [],
      marketingPlanEnabled: values.marketingPlanEnabled,
      marketingPlan: values.marketingPlan || '',
      isPublished: values.publish ? 'Y' : 'N' || 'N',
      // donationPlaces: values.donationPlaces,
      // contributionValue: values.contributionValue,
      // numberBeneficiaries: values.numberBeneficiaries,
      // costBeneficiaries: values.costBeneficiaries,
      // startDate: theDate!.value,
      // endDate: theDate1!.value,
      // percentageGovernance: values.percentageGovernance,
      // donorReached: 0,
      // campaignImage: '',
    };
    const resp = await insertOneCampaign(insertCampaignVars);
    console.debug('Campaign inserted:', resp);
    if (resp.error) {
      console.error('Cannot create campaign', insertCampaignVars, 'error:', resp.error);
      alert(`Error creating campaign ${insertCampaignVars.title}: ${resp.error?.message}`);
      return;
    }
    const campaignId = resp.data!.insertOneCampaign!._id!;

    const uploadedImagePaths: string[] = [];
    for (const image of values.images) {
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

    if (uploadedImagePaths.length >= 1) {
      console.debug(`Updating campaign ${campaignId} images:`, uploadedImagePaths);
      const updateCampaignImagesVars: UpdateCampaignImagesMutationVariables = {
        _id: campaignId,
        images: uploadedImagePaths,
        coverImage: uploadedImagePaths.length >= 1 ? uploadedImagePaths[0] : undefined,
        coverImageIndex: uploadedImagePaths.length >= 1 ? 0 : undefined,
      };
      const updated = await updateCampaignImages(updateCampaignImagesVars);
      console.debug('Successfully updated campaign', campaignId, 'images:', uploadedImagePaths);
    }

    router.push(paths.campaigns);
    // message.success('A campaign successfully created');
  };

  if (!organizationRes.data?.organization) {
    return (
      <OrgDashboardLayout organization={organizationRes?.data?.organization}>
        <Skeleton variant="rectangular" height={200} />
      </OrgDashboardLayout>
    );
  }
  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page title={`New Campaign - ${organizationRes?.data?.organization?.name ?? '...'} | Tmra`}>
        <Container maxWidth="xl">
          <HeaderBreadcrumbs
            heading={t('fundraising.campaign.create')}
            links={[
              { name: t('core.menu.overview'), href: paths.overview },
              { name: t('fundraising.campaign.campaigns'), href: paths.campaigns },
              { name: t('fundraising.campaign.create') },
            ]}
          />
          {organizationRes.data?.organization && (
            <CampaignEditForm
              organization={organizationRes.data?.organization}
              onSubmit={onSubmit}
              isNew={true}
            />
          )}
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
