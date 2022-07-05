import { useEffect } from 'react';
import { motion, useAnimation, MotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

type Props = BoxProps & MotionProps;

interface MotionInViewProps extends Props {
  threshold?: number | number[];
}

export default function MotionInView({
  children,
  variants,
  transition,
  threshold,
  ...other
}: MotionInViewProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!variants) return;
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
  }, [controls, inView, variants]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={variants ? Object.keys(variants)[0] : false}
      animate={controls}
      variants={variants}
      transition={transition}
      {...other}
    >
      {children}
    </Box>
  );
}
