// material
import { styled } from '@mui/material/styles';
import { Container, Divider } from '@mui/material';
// components
import MainLayout from '@layouts/main';
import Page from '@components/Page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { GetServerSideProps } from 'next';
import { GenericPageProps, getOrganizationFromRequest } from '@utils/whitelabel';

import IqamGlobalLayout from '@layouts/iqamglobal';
import IqamGlobalTermsContent from '@components/_external-pages/whitelabel/iqamglobal/IqamGlobalTermsContent';

import {
  OrganizationHomePageProps,
  getOrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
// import {
//   AboutHero,
//   AboutWhat,
//   AboutTeam,
//   AboutVision,
//   AboutTestimonials
// } from '../components/_external-pages/about';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

// ----------------------------------------------------------------------

export default function Privacy({ organizationRes, appearanceRes }: OrganizationHomePageProps) {
  const { t } = useTranslation();

  if (organizationRes?.data?._id === '61b4794cfe52d41f557f1acc') {
    return (
      <IqamGlobalLayout
        organization={organizationRes?.data}
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
      >
        <IqamGlobalTermsContent
          appearance={appearanceRes?.data?.nonprofitAppearance}
          organization={organizationRes?.data}
        />
      </IqamGlobalLayout>
    );
  }

  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('menu.privacy')} | ${t('app.name')}`}>
        <Container maxWidth="lg" sx={{ pb: 5 }}>
          <h1 style={{ color: 'var(--heading-color)', marginTop: 32 }}>{t('menu.privacy')}</h1>
          {/* 1. Date and Intro section */}
          {/* Date of Last Revision */}
          <h5>Date of Last Revision: April 19, 2021</h5>

          <p>
            Tmra (referred to throughout as “<strong>us</strong>“, “<strong>we</strong>“, “
            <strong>our</strong>“, etc.), is the owner and operator of the www.tmra.io website, a
            fundraising platform for organizations.
          </p>
          <p>
            This Privacy Policy applies to the www.tmra.io website, any subdomains thereof, any API
            integrations or widgets we offer, and any other websites or webpages we own or operate
            that include a link to this policy (all of which together are referred to as the “
            <strong>Website</strong>“). Although we provide shorter answers to privacy questions on
            the Website in order to be helpful, this Privacy Policy is the exclusive and
            authoritative source of our privacy practices. Please keep in mind that this Privacy
            Policy does not apply to other websites, which may be accessible from the Website.
            External websites may have data collection, storage, and use practices and policies that
            differ materially from those contained here.
          </p>
          <p>
            We may update this Privacy Policy from time to time. If we do so, we will notify you by
            posting the date of the last change or amendment at the top of this page. You agree that
            this method of notice is sufficient and that you will regularly check this Privacy
            Policy to see if updates or changes have been made.
          </p>

          <Divider />

          {/* Collected Information section */}
          <h2>What types of information do we collect?</h2>
          <ul>
            <li>
              <strong>Traffic Data.</strong> As is true of most websites, we automatically collect
              certain information when you visit our Website. This information includes but is not
              limited to: (i) IP addresses, (ii) domain servers, (iii) types of computers accessing
              the Website, (iv) types of web browsers used to access the Website, (v) referring/exit
              pages, (vi) data about usage patterns throughout the Website (e.g. click rates on
              different links etc.). Information of this type (“
              <strong>Traffic Data</strong>“) is for total internal use to improve the business
              performance and user experience of the Website.
            </li>
            <br />
            <li>
              <strong>Personal Information.</strong>As is true of most websites, we automatically
              collect certain information when you visit our Website. This information includes but
              is not limited to: (i) IP addresses, (ii) domain servers, (iii) types of computers
              accessing the Website, (iv) types of web browsers used to access the Website, (v)
              referring/exit pages, (vi) data about usage patterns throughout the Website (e.g.
              click rates on different links etc.). Information of this type (“
              <strong>Traffic Data</strong>
              “) is for total internal use to improve the business performance and user experience
              of the Website.
              <p>
                In order for you to make donations through the Website, register with the Website or
                take certain other actions on the Website (e.g. contacting us through forms, etc.)
                we require you to provide us with information that personally identifies you (“
                <strong>Personal Information</strong>“). Personal Information includes the following
                types of data, but is not limited to them:
              </p>
              <ol>
                <li>
                  Contact Data such as name, mailing address, e-mail address, account number, and
                  password
                </li>
                <li>Financial Data such as your account or credit card number</li>
                <li>Demographic Data such as your zip code, age, and gender</li>
                <li>Company Data such as your business name, size, and business type</li>
                <li>Activity Data such as your donation history, fundraising history, etc.</li>
              </ol>
            </li>
          </ul>

          <Divider />

          {/* 2. How Tmra collects user data */}
          <h2>How do we collect traffic data?</h2>
          <p>
            As is true of most websites, we use cookies to collect Traffic Data related to the
            Website. We use another company to place cookies on your computer to compile this
            information about usage of the Website.
          </p>
          <p>
            The Website also contains web beacons, which are electronic images that are used along
            with cookies to compile statistics so we can analyze how the Website is being used. Our
            e-mails may also contain web beacons so we can track how many people open the message or
            click on links within the message. This information helps us improve our communication
            and marketing efforts.
          </p>
          <p>
            We use a third party to gather information on how you and others are using the Website.
            By using this service we are able (for example) to see how many people visited a given
            page or clicked on a given link. This information helps us optimize the performance of
            the Website. We also use cookies to serve ads through third party ad network services to
            people who have visited our Website (“<strong>Retargeting Ads</strong>“). These
            Retargeting Ads will be viewable on other websites that are part of the ad network. Your
            browser likely contains controls for deleting or disabling cookies; however, your
            experience on the Website may be impacted if cookies are disabled.
          </p>

          <Divider />

          {/* 3. Tmra keeps confidential information section */}
          <h2>Is my personal information kept confidential?</h2>
          <p>
            Except as otherwise provided in this Privacy Policy, we will keep your Personal
            Information private and will not share it with other third parties or show it publicly
            unless in the case that a) otherwise is provided on the interface or here in the terms,
            or b) such disclosure is necessary to: (i) comply with a court order or other legal
            process, (ii) to protect our rights or property, or (iii) to enforce our Terms of
            Service. Please keep in mind that while we take reasonable precautions to safeguard your
            Personal Information no amount of protection can guarantee its security.
          </p>
          <p>
            Donors accept to share their personal information with both the party they are donating
            to (i.e the Organization), and Tmra. These terms are binding to Tmra and not to the
            Organization. Make sure that you read any Terms or Privacy Policy that is created and
            owned by the Organization.
          </p>

          <Divider />

          {/* 4. How Tmra uses customer's personal information */}
          <h2>How does Tmra use my personal information?</h2>
          <p>
            We use your information in a variety of ways to help us run the Website. Here are some
            of the ways we use your information:
          </p>
          <ol>
            <li>To send you receipts</li>
            <li>To send you updates about the Website</li>
            <li>To send you updates about activity on the Website related to you</li>
            <li>To send newsletters</li>
            <li>To administer your account</li>
            <li>To respond to customer service inquiries</li>
            <li>To send marketing materials</li>
            <li>To improve our Website and marketing efforts</li>
          </ol>
          <p>
            We commit not to share your information with third parties except as what’s provided
            under the previous section. Tmra will never sell your Personal Information as raw data
            to third parties, although we might reprocess the data and provide it in aggregation as
            a commercial product, i.e non-identified statistics and analytics. We reserve the right
            to include partners or third parties in our communication with you through your contact
            information.
          </p>

          <Divider />

          {/* 5. How Email communications work */}
          <h2>How do your email communications work?</h2>
          <p>
            We send out various emails to clients and others who interact with the Website, such as
            emails about new blog posts, product releases, or special events or promotions
            (“Marketing Emails”). Organizations that register with the Website will automatically be
            subscribed to receive certain Marketing Emails. Aside from those registering with the
            Website, we might send occasional and personal invitations to use our Website.
          </p>
          <p>
            Marketing Emails contain an unsubscribe option which you can follow at any point if you
            wish to stop receiving some, or all, Marketing Emails. We don’t commit that all
            Marketing Emails will include this unsubscribe option, and if missed, you still can
            contact us if you wish to stop receiving them, our email address is{' '}
            <a href="mailto:hello@tmra.io">hello@tmra.io</a>, we will remove you from our list
            shortly after receiving your mesasge.
          </p>
          <p>
            The Website also allows Organizations to send various transactional (e.g. automated
            donation receipts etc.) and outreach emails (together “Client Emails”). Unless such
            Client Emails are expected as part of an ongoing commercial relationship, or otherwise,
            by CANSPAM, they will contain an unsubscribe link.
          </p>
          <p>
            As part of an organization’s use of the Website, individual supporters of the
            organization may also send emails through the Website (“Supporter Emails”). For example,
            personal fundraisers may send messages to their contacts through the Website in order to
            ask people to visit their fundraising page and donate. They may also send emails to
            update donors or to thank donors for their gifts. Supporter Emails sent through the
            Website will have an unsubscribe link.
          </p>
          <p>
            Please keep in mind that, notwithstanding the foregoing, we have no control over emails
            sent through third party emailing applications.
          </p>

          <Divider />

          {/* 6. Parties who has access to Credit Card section */}
          <h2>Who has access to my Credit Card number?</h2>
          <p>
            We do not process any underlying payments facilitated by the Website; payments are
            processed by our partner Internet Payment Service Providers, by way of example but not
            limitation; Stripe and PayPal (each a “<strong>Payments Partner</strong>“). Financial
            data you input to consummate a transaction is encrypted using SSL technology and sent to
            a Payments Partner. For recurring donations your Financial and Contact data is stored by
            a Payment Partner in accordance with industry standards. Only the Payment Partner has
            access to your credit card number. We do not have access to your credit card number.
            Data handled by a Payment Partner is subject to that Payments Partner’s terms and
            privacy policy.
          </p>
          <p>Who Has Access To My Personal Information (Except for Credit Card)?</p>
          <p>
            We share your Personal information with other business partners who assist us in
            performing core services (such as hosting, data storage, and security) related to the
            operation of the Website. These business partners only use your Personal Information to
            perform these core services, which are necessary for the orderly operation of the
            Website.
          </p>
          <p>
            Any organization you make a contribution to, or purchase from, through the Website will
            have access to your Personal Information (except for your credit card number); note that
            making a donation “anonymous” only hides your donation from public activity feeds, not
            the underlying charitable beneficiary.
          </p>
          <p>
            You consent to the foregoing and agree that we are not responsible for how these
            organizations or persons handle your Personal Information. You should visit their
            websites and/or contact them directly for their privacy policies and data usage
            practices.
          </p>

          <Divider />

          {/* 7. Organization page definition section */}
          <h2>What is an Organization Page?</h2>
          <p>
            Each organization that registers with the Website is automatically created an
            Organization Page. This page displays both custom content the Organization makes or
            calculated and predefined content created by the Website, an example of the latter is
            the total amount the nonprofit has raised through the Website and total number of
            supporters.
          </p>

          <Divider />

          {/* 8. Customer's choices section */}
          <h2>What Choices Do I Have?</h2>
          <p>
            It’s up to you whether or not you want to provide us with Personal Information. You can
            still visit the Website without providing us with Personal information, but you will be
            unable to take certain actions without doing so.
          </p>
          <p>
            You can also choose to make contributions anonymously. If you make an anonymous
            contribution, your name will not be displayed through the Website’s pages but your
            Personal Information will be given to the Organization you are donating to.
          </p>

          <Divider />

          {/* 9. Update personal information section */}
          <h2>How Can I Update or Correct My Personal Information ?</h2>
          <p>
            If you know, or suspect, that your credit card, user name, or password has been lost,
            stolen, or used without your authorization you need to contact us immediately (
            <a href="mailto:hello.tmra.io">hello@tmra.io</a>
            ). Upon notification, we will take reasonable steps to mitigate any damage which may
            have been caused. You are responsible for the safety and security of your user name and
            password. You should logout after each session you have with the Website and you
            shouldn’t share this information.
          </p>
        </Container>
      </RootStyle>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<OrganizationHomePageProps> = async ({
  locale,
  req,
  res,
}) => {
  const organization = await getOrganizationFromRequest(req);
  const organizationHomePageProps = await getOrganizationHomePageProps({
    organizationId: organization?.id,
  });
  res.statusCode = organizationHomePageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      ...organizationHomePageProps,
    },
  };
};
