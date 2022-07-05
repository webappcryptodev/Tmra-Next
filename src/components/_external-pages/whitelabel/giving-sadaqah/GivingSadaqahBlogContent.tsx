import { MotionInView, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
// components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import React from 'react';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function GivingSadaqahBlogContent({ organization, appearance }) {
  const { t } = useTranslation();

  const blogsList = [
    {
      dataCy: 'org.blog-page.sadaqah',
      title: 'SADAQAH',
      descriptions: [
        'Sadaqah (صدقة) translates into “charity” or “benevolence”. Generally, it is understood to mean “voluntary charity“. In the Quran, the word means voluntary offering, whose amount is at the will of the “benefactor”.',
      ],
    },
    {
      dataCy: 'org.blog-page.fitrah',
      title: 'FITRAH',
      descriptions: [
        'Fitra, or zakat ul-Fitr, is an amount that is paid by every adult self-supporting Muslim on behalf of the self and dependents. The fitra is due before the Eid prayers, and is fixed at the modern equivalent of 2.5kg of wheat (one sa’a of grain in the Prophet’s time), or its monetary value.',
      ],
    },
    {
      dataCy: 'org.blog-page.sadaqah-jaariyah',
      title: 'SADAQAH JAARIYAH',
      descriptions: [
        'This is translated as “continuous sadaqah”, whose benefits accrue until the Day of Judgment. This is the kind of sadaqah that extends beyond even one’s own lifetime, as explained in the following hadith: “If a human dies, then his good deeds stop except for three: a Sadaqa Jariyah, a beneficial knowledge, or a righteous child who prays for him.” – Sahih Muslim',
        'Such acts can include the following: enabling someone’s education, building a masjid or orphanage, digging a well, etc.',
      ],
    },
    {
      dataCy: 'org.blog-page.qurbani',
      title: 'QURBANI',
      descriptions: [
        'Qurbanī (قربانى‎) or uḍḥiyyah (أضحية) is the sacrifice of a livestock animal (a domesticated goat, sheep, cow or camel) during the feast of Eid al-Adha. The sacrifice of an animal is to be done from the morning of the 10th until the sunset of the 13th of the month of Dhu’l-Hijjah, the 12th lunar month of the Islamic calendar. The sacrifice and slaughter of the animal is strictly for the pleasure of Allah, and symbolises the Prophet Ibrahim’s obedience to Allah in his willingness to sacrifice his son.',
      ],
    },
    {
      dataCy: 'org.blog-page.zakat',
      title: 'ZAKAT',
      descriptions: [
        'Zakat falls under one of the five pillars of Islam. As such, it is an obligatory act, as opposed to sadaqah, which is voluntary.',
        'Another aspect of zakat is the fact that it only become compulsory if one’s wealth reaches a minimum threshold called the nisab – according to modern calculations, this is approximately the equivalent of 85 grams of gold. When the nisab amount has been reached annually, 2.5% of the value has to be given away in zakat.',
        'Several verses in the Qur’an stress the importance of zakat. For instance, part of Surah al-Araf [7:156] states the following: “[Allah] said: My punishment – I afflict with it whom I will, but My mercy encompasses all things. So I will decree it [i.e. His mercy] for those who fear Me and give zakah and those who believe in Our verses.”',
      ],
    },
    {
      dataCy: 'org.blog-page.ramadhan',
      title: 'RAMADHAN',
      descriptions: [
        'It is narrated in the hadith of al-Bukhari (no. 6) that Allah’s Messenger was the most generous of all the people, and he used to reach the peak of generosity in the month of Ramadan. According to the hadith collections of Bukhari and Muslim, Ibn `Abbas (May Allah be pleased with them) reported: “The Messenger of Allah was the most generous of the men; and he was the most generous during the month of Ramadan when Jibril visited him every night and recited the Qur’an to him.” The reason is that during Ramadan the virtues and rewards of giving alms are far more rewarding than in the other months.',
      ],
    },
    {
      dataCy: 'org.blog-page.fidyah-and-kaffarah',
      title: 'FIDYAH & KAFFARAH',
      descriptions: [
        'Fidyah (الفدية‎) and Kaffara (كفارة‎) are donations made when an Islamic rule is violated. The donations can be of food, or money, and are used for those in need. The Qur’an distinguishes between the two, but also unifies them into one act of remedy.',
        'Fidyah is a means of compensation for an unintentional missed action or violation of the rules for observing a pillar of Islam. For instance, fidyah is due when someone is ill or of extreme age (old or young), and is unable to fast for the required number of days, nor will be able to make up for the fast. In Ramadan, the Fidyah must be paid for each fast missed.',
        'Kaffara refers to the penalty that has to be paid for an intentional act of noncompliance with the rules or rites of Islam. For instance, it has to be paid when someone deliberately misses or breaks their fast, or breaches one of the rules of being in the state of ihram for pilgrimage.',
      ],
    },
  ];

  const itemData = [
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC01001.jpeg`,
      title: 'DSC01001.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC01031.jpeg`,
      title: 'DSC01031.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC01025.jpeg`,
      title: 'DSC01025.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC01015.jpeg`,
      title: 'DSC01015.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC01011.jpeg`,
      title: 'DSC01011.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC00889.jpeg`,
      title: 'DSC00889.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC00880.jpeg`,
      title: 'DSC00880.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC00846.jpeg`,
      title: 'DSC00846.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC00848.jpeg`,
      title: 'DSC00848.jpeg',
    },
    {
      img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/DSC00859.jpeg`,
      title: 'DSC00859.jpeg',
    },
  ];

  return (
    <RootStyle
      title={`Giving Sadaqah | Blog`}
      id="move_top"
      favicon={
        appearance?.favIcon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.favIcon}`
          : null
      }
    >
      <Container maxWidth="lg" sx={{ pt: 12 }} id="obligation">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="org.blog-page.h2.obligation-to-give"
          >
            The Obligation to Give
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              mb: 6,
              mx: 'auto',
              maxWidth: 630,
              color: 'text.secondary',
            }}
          >
            In common with all faiths, Islam requires that an individual give charity to help
            others, as a religious obligation. On this page, we have collected some of the most
            common forms of giving that will simultaneously help you fulfil this obligation, and
            earn your reward in the Hereafter.
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
                    data-cy={item.dataCy}
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

      <Container maxWidth="lg" sx={{ py: 4 }} id="gallery">
        <MotionInView variants={varFadeInUp}>
          <Stack direction="column" spacing={3} alignItems="center" mb={3}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              Giving Sadaqah Gallery
            </Typography>

            <Typography
              sx={{
                maxWidth: 630,
                color: 'text.secondary',
              }}
            >
              A collection of media from our effort so far
            </Typography>
          </Stack>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <iframe
            style={{ borderRadius: '1rem', minHeight: '535px' }}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SW9ANUJgNss"
            frameBorder="0"
            allowFullScreen={false}
          />
        </MotionInView>

        <Box mt={3}>
          <MotionInView variants={varFadeInUp}>
            <ImageList
              rowHeight={164}
              gap={7}
              sx={{
                gridAutoFlow: 'column',
                gridTemplateColumns: 'repeat(auto-fit, minmax(215px,1fr)) !important',
                gridAutoColumns: 'minmax(215px, 1fr)',
              }}
            >
              {itemData.map(item => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    style={{ width: 'auto', height: '100%' }}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </MotionInView>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pt: 4, pb: 3 }} id="obligation">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="org.blog-page.h2.news-and-updates"
          >
            News & Updates
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  mx: 'auto',
                  maxWidth: 630,
                  color: 'text.secondary',
                }}
              >
                We love to keep in touch with our donors and friends. Why not sign up for our
                newsletter, where we will keep you informed from time to time about the latest news
                and updates.
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Stack direction="column" spacing={2}>
                <TextField label="First Name" data-cy="org.blog-page.field.first-name" />
                <TextField label="Last Name" data-cy="org.blog-page.field.last-name" />
                <TextField label="Email" data-cy="org.blog-page.field.email-name" />
                <Button
                  color="primary"
                  variant="contained"
                  data-cy="org.blog-page.button.subscribe"
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
