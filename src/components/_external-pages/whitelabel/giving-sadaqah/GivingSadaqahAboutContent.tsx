// material
// components
import { MotionInView, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
import { Box, Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import getConfig from 'next/config';
import React from 'react';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function GivingSadaqahAboutContent({ organization, appearance }) {
  return (
    <RootStyle
      title={`Giving Sadaqah | About Us`}
      favicon={
        appearance?.favIcon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.favIcon}`
          : null
      }
    >
      <Container maxWidth="lg" sx={{ pt: 12 }} id="our_story">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="org.about-us-page.h2.our-story"
          >
            Our Story
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h4"
                  mb={3}
                  color="primary.main"
                  data-cy="org.about-us-page.how-we-got-started"
                >
                  How We Got Started
                </Typography>
                <Typography
                  sx={{
                    mx: 'auto',
                    maxWidth: 580,
                    color: 'text.secondary',
                  }}
                >
                  Giving Sadaqah is the new name of a UK registered charity which was first
                  incorporated in 2002. This recent (2018) rebranding was initiated to refocus our
                  efforts towards facilitating the basic welfare needs, with a particular focus on
                  education, of those affected by natural disasters, famine, conflicts and other
                  calamities.<br></br> <br></br> The roots of this organisation date back to the
                  Somalian drought of 2008, when a group of volunteers began to raise funds in
                  response. Within a short period of time, and by the grace of Allah سُبْحَانَهُ وَ
                  تَعَالَى, “RAMDA” (which later evolved into “HOPE Regeneration of Africa”) was
                  founded, and was providing relief to the affected.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <iframe
                style={{ borderRadius: '1rem', minHeight: '320px' }}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/F5bLeUk8gkU"
                frameBorder="0"
                allowFullScreen={false}
              />
            </Grid>
          </Grid>
        </MotionInView>
      </Container>

      <Container maxWidth="lg" sx={{ pt: 12 }} id="our_raising">
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <iframe
                style={{ borderRadius: '1rem', minHeight: '320px' }}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GmDkckFk0G4"
                frameBorder="0"
                allowFullScreen={false}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography
                variant="h4"
                color="primary.main"
                data-cy="org.about-us-page.where-we-are-now"
              >
                Where We Are Now
              </Typography>
              <br></br>
              <Typography
                sx={{
                  mb: 6,
                  mx: 'auto',
                  maxWidth: 1200,
                  color: 'text.secondary',
                }}
              >
                Today ٱلْـحَـمْـدُ للهِ the organisation has achieved great success in establishing
                and running four Orphanage Schools and five Masajid in Northern Africa. There are
                currently over 1,600 children from Primary through to early Secondary (Year 9)
                stages being presented with the gifts of education, food and shelter so that they
                may acquire the skills necessary to lead independent lives with dignity and promote
                a more equitable and just society based on Islamic values.<br></br>
                <br></br>
                In order to progress further, Giving Sadaqah has been established with the renewed
                objective of going global, so that thousands more can benefit from opportunities
                afforded by education.<br></br>
                <br></br>
                Giving Sadaqah is the vehicle which requires your charitable investment to enable
                those in need to reach their destination of choice in life.
              </Typography>
            </Grid>
          </Grid>
        </MotionInView>
      </Container>
      <Container>
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="org.about-us-page.existing-projects"
          >
            Some of our existing projects
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            SCHOOLS
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              mb: 6,
              mx: 'auto',
              maxWidth: 980,
              color: 'text.secondary',
              textAlign: 'left',
            }}
          >
            Although the charity is aiming to promote this with a global reach, the current focus is
            on North-West Somaliland – one of the most peaceful areas of Somalia. What started here
            as a small group of orphans being taught under the shade of a tree has today branched
            into:
            <br></br> • 4 schools providing quality national curriculum education (One (Migane)
            school was also voted as a top school by the Ministry of Education) <br></br>• Over 1800
            children, mainly orphans receiving free education <br></br>• A sponsored team of over 40
            dedicated teachers and another 12 support staff giving their all on salaries of about
            £100 per month.<br></br> The 4 Schools are the Gargaar School (Boromeh district with
            over 800 children); Hussein Migane School (Dilla region with over 500 children); Boon
            School (Southern region, over 250 children) and the Dhuhun School (over 150 children).
            The schools provide free education from Years 1-8 and do not have the capacity or
            facilities to take them to Secondary School completion or to lower the waiting lists,
            where hundreds more children could leave the barren ground and be in a classroom. There
            is a critical need for expansion. Currently the monthly costs for maintaining the
            schools is £5000 per month. For just £20/month you can earn the reward in Aakhira of
            sponsoring an orphan’s education and welfare needs. Allah (swt) and the Prophet (PBUH)
            remind across the Quran and the Sunnah of the importance of taking care of the orphans
            and the needy and our reward for this in the Aakhira.
          </Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="lg" sx={{ pt: 3 }} id="thumbnail_cover">
        <MotionInView variants={varFadeInUp}>
          <iframe
            style={{ borderRadius: '1rem', minHeight: '615px' }}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/CJUKEsDs12I"
            frameBorder="0"
            allowFullScreen={false}
          />
        </MotionInView>
      </Container>

      <Container sx={{ pt: 6 }}>
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="org.about-us-page.supporting"
          >
            Supporting Families in Need
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              mb: 6,
              mx: 'auto',
              maxWidth: 980,
              color: 'text.secondary',
              textAlign: 'left',
            }}
          >
            There are also over 400 families who are classed as extremely vulnerable and have no
            bread-earners due to terminal illness and various disabilities. Giving Sadaqah is
            looking to provide for their daily food needs for just £50/month per family.During 2019,
            only 10 of these families have been sponsored.
          </Typography>
        </MotionInView>
      </Container>
      <StandardImageList />
    </RootStyle>
  );
}

export function StandardImageList() {
  return (
    <Container sx={{ pt: 6, pb: 6 }}>
      <MotionInView variants={varFadeInUp}>
        <ImageList sx={{}} cols={3} rowHeight={164} gap={2}>
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
    </Container>
  );
}

const itemData = [
  {
    img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/IMG-20191016-WA0232.jpeg`,
    title: 'IMG-20191016-WA0232.jpeg',
  },
  {
    img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/IMG-20191016-WA0224.jpeg`,
    title: 'IMG-20191016-WA0224.jpe',
  },
  {
    img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/IMG-20191016-WA0188.jpeg`,
    title: 'IMG-20191016-WA0188.jpeg',
  },
  {
    img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/Qurbani2020_1.jpeg`,
    title: 'Qurbani2020_1.jpeg',
  },
  {
    img: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/Qurbani2020_2.jpeg`,
    title: 'Qurbani2020_2.jpeg',
  },
];
