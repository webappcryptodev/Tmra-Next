// material
// components
import { MotionInView, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function GivingSadaqahTermsContent({ organization, appearance }) {
  const { t } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const blogsList = [
    {
      title: 'WEBSITE USAGE TERMS AND CONDITIONS',
      descriptions: [
        'Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Giving Sadaqah’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website. The term ‘Giving Sadaqah’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is 64 High St, Harlesden, London W10 4 SJ. Our charity registration number is 1123609. The term ‘you’ refers to the user or viewer of our website. The use of this website is subject to the following terms of use:',

        '· The content of the pages of this website is for your general information and use only. It is subject to change without notice.',
        '· By using the website, you grant your consent to the collection by us of your personally identifiable data, but not restricted to: name, address, contact details, amount of donation.',
        '· Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.',
        '· Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.',
        '· This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.',
        '· All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.',
        '· Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.',
        '· From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).',
        'Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.',
      ],
    },
    {
      title: 'SECURITY CONTROLS',
      descriptions: [
        'All data we hold about you is protected by strong encryption on our website servers. Nobody has access to this data other than our website administration team. The servers are housed in a secure location in Malaysia.',
      ],
    },
    {
      title: 'REFUNDS AND CANCELLATIONS',
      descriptions: [
        'Under UK law, we are not obliged to refund donations, unless it is for a specific circumstance (The Charities Act 2011).',

        'There may, however, be situations where a refund request will require further consideration.  Such considerations can only be undertaken on a case-by-case basis.',

        'If you feel that your particular circumstance warrants a refund, please contact us on refunds@givingsadaqah.org, and provide full details and supporting documentation of your case. It will be reviewed and responded to within two weeks.',
      ],
    },
    {
      title: 'PAYMENT GATEWAY FOR DEBIT & CREDIT CARDS',
      descriptions: ['We use Stripe as our preferred payment Gateway'],
    },
    {
      title: 'USE OF YOUR PERSONAL DATA',
      descriptions: [
        'The information that you provide by your use of this website may be used by us for marketing purposes, such as contacting you via email or post. Your use of this website for donations constitutes your consent to use your personal data.',

        'We do not sell or share your data with any third parties.',

        'We do not use cookies to track you or your browsing actions.',
      ],
    },
    {
      title: 'PAYMENT GATEWAY FOR DIRECT DEBITS',
      descriptions: [
        'The Direct Debit mechanism is currently in a development process and will be completed shortly.',
      ],
    },
    {
      title: 'YOUR RIGHTS OVER YOUR DATA',
      descriptions: [
        'All data related enquiries are handled by emailing us on data@givingsadaqah.org.  Please use this email for any of the following purposes:',

        'You retain at all times the rights to your data stored with us. You may withdraw your consent for us to use your data at any time.',

        'You also have the right to request a copy of all the data that we hold about you.',

        'You have the right to delete all of the data that we hold about you.',

        'You have the right to modify all data that we hold about you.',
      ],
    },
  ];

  return (
    <RootStyle
      title={`Giving Sadaqah | Privacy Policy`}
      favicon={
        appearance?.favIcon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.favIcon}`
          : null
      }
    >
      <Container maxWidth="lg" sx={{ pt: 12 }} id="terms_of_use">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Terms of Use
          </Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="lg" sx={{ py: 3 }} id="gallery">
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={4}>
            {blogsList.map((item, key) => (
              <Grid item key={key} lg={6} md={6} sm={12} xs={12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls={`panel${key}-content`}
                    id={`panel${key}-header`}
                  >
                    <Typography variant="h4" color="primary.main">
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack direction="column" spacing={3}>
                      {item.descriptions.map((desc, key) => (
                        <Typography key={key} variant="body1" color="text.secondary">
                          {desc}
                        </Typography>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
