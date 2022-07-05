import { Button, DialogActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'next-i18next';
import React from 'react';

export interface ConfirmDeleteDialogProps {
  docType: string;
  docTitle?: string | null;
  open: boolean;
  handleClose: () => unknown;
  handleDelete: () => unknown;
}

export function ConfirmDeleteDialog({
  docType,
  docTitle,
  open,
  handleClose,
  handleDelete,
}: ConfirmDeleteDialogProps) {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {t('core.delete.confirm.title', { docType, docTitle })}
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText id="alert-dialog-description">{description}</DialogContentText> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          {t('core.cancel')}
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          {t('core.delete')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
