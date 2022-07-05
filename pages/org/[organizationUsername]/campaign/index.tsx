import GivingSadaqahCampaigns, {
  getGivingSadaqahCampaignsProps,
  GivingSadaqahCampaignListProps,
} from '@components/_external-pages/whitelabel/giving-sadaqah/GivingSadaqahCampaigns';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

// ----------------------------------------------------------------------

export interface GivingSadaqahCampaignsWrapperProps {
  organizationHomePageProps: GivingSadaqahCampaignListProps;
}

export default function GivingSadaqahCampaignsWrapper({
  organizationHomePageProps,
}: GivingSadaqahCampaignsWrapperProps) {
  return <GivingSadaqahCampaigns {...organizationHomePageProps} />;
}

export const getServerSideProps: GetServerSideProps<GivingSadaqahCampaignsWrapperProps> = async ({
  locale,
  res,
  query,
}) => {
  const organizationHomePageProps = await getGivingSadaqahCampaignsProps({
    organizationUsername: query.organizationUsername as string,
  });

  res.statusCode = organizationHomePageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      organizationHomePageProps,
    },
  };
};
