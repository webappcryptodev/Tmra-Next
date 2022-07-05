import { ReactNode } from 'react';
import { IconifyIcon } from '@iconify/react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, BoxProps, Stack, StackProps, IconButtonProps } from '@mui/material';
//
import Iconify from '@components/Iconify';
import { IconButtonAnimate } from '../animate';

// ----------------------------------------------------------------------

const BUTTON_SIZE = 40;

interface ArrowStyleProps extends IconButtonProps {
  filled: boolean;
}

const ArrowStyle = styled(IconButtonAnimate, {
  shouldForwardProp: prop => prop !== 'filled',
})<ArrowStyleProps>(({ filled, theme }) => ({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  cursor: 'pointer',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: theme.palette.text.primary,
  },
  ...(filled && {
    opacity: 0.48,
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[900],
    '&:hover': {
      opacity: 1,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[900],
    },
  }),
}));

// ----------------------------------------------------------------------

type IProps = BoxProps & StackProps;

interface Props extends IProps {
  filled?: boolean;
  children?: ReactNode;
  customIcon?: IconifyIcon | string;
  onNext?: VoidFunction;
  onPrevious?: VoidFunction;
}

export default function CarouselArrows({
  filled = false,
  customIcon, // Set icon right
  onNext,
  onPrevious,
  children,
  ...other
}: Props) {
  const theme = useTheme();
  const isRTL = theme.direction === 'rtl';

  const style = {
    position: 'absolute',
    mt: -2.5,
    top: '50%',
    zIndex: 9,
  } as const;

  if (children) {
    return (
      <Box {...other}>
        <Box className="arrow left" sx={{ ...style, left: 0 }}>
          <ArrowStyle filled={filled} onClick={onPrevious}>
            {leftIcon(customIcon, isRTL)}
          </ArrowStyle>
        </Box>

        {children}

        <Box className="arrow right" sx={{ ...style, right: 0 }}>
          <ArrowStyle filled={filled} onClick={onNext}>
            {rightIcon(customIcon, isRTL)}
          </ArrowStyle>
        </Box>
      </Box>
    );
  }

  return (
    <Stack direction="row" spacing={1} {...other}>
      <ArrowStyle className="arrow left" filled={filled} onClick={onPrevious}>
        {leftIcon(customIcon, isRTL)}
      </ArrowStyle>
      <ArrowStyle className="arrow right" filled={filled} onClick={onNext}>
        {rightIcon(customIcon, isRTL)}
      </ArrowStyle>
    </Stack>
  );
}

// ----------------------------------------------------------------------

const leftIcon = (customIcon?: IconifyIcon | string, isRTL?: boolean) => (
  <Iconify
    icon={customIcon ? customIcon : 'eva:arrow-right-fill'}
    sx={{
      width: 20,
      height: 20,
      transform: ' scaleX(-1)',
      ...(isRTL && { transform: ' scaleX(1)' }),
    }}
  />
);

const rightIcon = (customIcon?: IconifyIcon | string, isRTL?: boolean) => (
  <Iconify
    icon={customIcon ? customIcon : 'eva:arrow-right-fill'}
    sx={{
      width: 20,
      height: 20,
      ...(isRTL && { transform: ' scaleX(-1)' }),
    }}
  />
);
