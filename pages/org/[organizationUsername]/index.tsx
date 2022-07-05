/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
// material
// import {
//   AboutHero,
//   AboutWhat,
//   AboutTeam,
//   AboutVision,
//   AboutTestimonials
// } from '../components/_external-pages/about';
import OrganizationHomePage, {
  getOrganizationHomePageProps,
  OrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

// ----------------------------------------------------------------------

/**
 * Important: Next.js props cannot be undefined, so for missing value, use null.
 */
export interface OrganizationHomePageWrapperProps {
  organizationHomePageProps: OrganizationHomePageProps;
}

export default function OrganizationHomePageWrapper({
  organizationHomePageProps,
}: OrganizationHomePageWrapperProps) {
  // Hendy's note: Logic to check organization is inside the OrganizationHomePage component
  return <OrganizationHomePage {...organizationHomePageProps} />;
}

export const getServerSideProps: GetServerSideProps<OrganizationHomePageWrapperProps> = async ({
  locale,
  res,
  query,
}) => {
  const organizationHomePageProps = await getOrganizationHomePageProps({
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
