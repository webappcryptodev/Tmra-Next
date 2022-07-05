import { useState } from 'react';
// @mui
import { IconButton, MenuItem, Snackbar, Alert } from '@mui/material';
//
import Iconify from '../Iconify';
import MenuPopover from '../MenuPopover';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// ----------------------------------------------------------------------

type Props = {
  actions: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  share?: boolean;
  shareLink?: string;
};

export default function TableMoreMenu({ actions, direction, share, shareLink }: Props) {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Snackbar
        open={copiedStatus}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={() => setCopiedStatus(false)}
      >
        <Alert onClose={() => setCopiedStatus(false)} severity="success">
          Copied
        </Alert>
      </Snackbar>
      <IconButton onClick={handleOpen}>
        <Iconify
          icon={direction ? `eva:more-${direction}-fill` : 'eva:more-vertical-fill'}
          width={20}
          height={20}
        />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          mt: -1,
          width: 160,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 },
          },
        }}
      >
        {actions}
        {share && shareLink && (
          <CopyToClipboard
            text={shareLink ?? window.location.origin}
            onCopy={() => {
              setCopiedStatus(true);
              setOpen(null);
            }}
          >
            <MenuItem>
              <Iconify icon={'bi:share-fill'} />
              Share
            </MenuItem>
          </CopyToClipboard>
        )}
      </MenuPopover>
    </>
  );
}
