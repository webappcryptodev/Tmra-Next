// Components
// Animations
import { MotionInView, varFadeInUp } from '@components/animate';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// Styled Components
const CoverImgStyle = styled('img')(() => ({
  width: '100%',
  height: '20rem',
  objectFit: 'cover',
  borderRadius: '1rem',
}));

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function MainImage({ image }) {
  const coverImageUrl = `${publicRuntimeConfig.bunny.cdn.urlMedia}/${image}`;
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }} id="image_cover">
        <MotionInView variants={varFadeInUp}>
          <CoverImgStyle src={coverImageUrl} />
        </MotionInView>
      </Container>
    </>
  );
}
