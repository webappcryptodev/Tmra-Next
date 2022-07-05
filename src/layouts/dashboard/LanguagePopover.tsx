import { useRef, useState } from 'react';
// material
import { Box, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
import { MIconButton } from '../../components/@material-extend';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en-US',
    label: 'English',
    icon: '/static/icons/ic_flag_en.svg',
  },
  {
    value: 'ar-SA',
    label: 'Arabic',
    icon: '/static/icons/ic_flag_ar.svg',
  },
  {
    value: 'id-ID',
    label: 'Indonesian',
    icon: '/static/icons/ic_flag_id.svg',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSwitch = (locale: string) => {
    router.replace(router.asPath, undefined, { locale });
    setOpen(false);
  };
  const currentLang = LANGS.find(it => it.value === router.locale) ?? LANGS[0];

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={() => setOpen(true)}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && { bgcolor: 'action.selected' }),
        }}
        data-cy="dashboard.dashboard-navbar.language"
      >
        <img
          src={currentLang.icon}
          alt={currentLang.label}
          style={{ height: 24, boxShadow: '0px 0px 4px #00000040' }}
        />
      </MIconButton>

      <MenuPopover open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current}>
        <Box sx={{ py: 1 }}>
          {LANGS.map(option => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => handleSwitch(option.value)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box
                  component="img"
                  alt={option.label}
                  src={option.icon}
                  style={{ boxShadow: '0px 0px 4px #00000040' }}
                />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
}
