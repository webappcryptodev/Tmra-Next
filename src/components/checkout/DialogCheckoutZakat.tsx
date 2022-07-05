/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { MotionContainer, varBounceIn, varWrapEnter } from '@components/animate';
// Icon
import { Icon } from '@iconify/react';
import { Close } from '@mui/icons-material';
// @mui
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Stack,
  Typography,
  styled,
  Theme,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { motion } from 'framer-motion';

import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import { app } from '@redux/slices/auth/realm';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { Appearance } from '@modules/fundraising/Campaign';

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export const CustomCircularProgress = styled(CircularProgress)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getAccentColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      color: color,
    };
  },
);

export default function DialogCheckoutZakat({
  open,
  onClose,
  scrollType,
  amount,
  dataUrlTemplate,
  appearance,
}: {
  open: boolean;
  onClose: (open: boolean) => void;
  scrollType?: any;
  dataUrlTemplate?: string | null;
  amount?: number | string;
  appearance?: Appearance | null;
}) {
  // paytabs request
  const [isLoading, setLoading] = useState<boolean>(false);
  const [paytabsUrl, setPaytabsUrl] = useState<string | undefined>();
  const [paytabsCallback, setPaytabsCallback] = useState(false);
  const [transRef, setTransRef] = useState<string | undefined>();

  useEffect(() => {
    if (amount && Number(amount) > 0 && open && !paytabsUrl) {
      setLoading(true);
      getPaytabsUrl(Number(amount));
    }
  }, [amount, open, paytabsUrl]);

  const getPaytabsUrl = async (donateValue: number) => {
    const path = `${publicRuntimeConfig.tmra.fund.url}/v1/paytabs/request`;
    const payload = {
      userId: app.currentUser!.id,
      campaignId: '1111114',
      campaignTitle: 'abc',
      amount: donateValue.toString(),
    };

    const response = await axios.post(path, payload);
    setPaytabsUrl(response.data.data.redirect_url);
    setTransRef(response.data.data.tran_ref);
    setLoading(false);
  };

  const handleClosePopup = () => {
    setPaytabsUrl(undefined);
    setTransRef(undefined);
    onClose(true);
  };

  return (
    <motion.div variants={varWrapEnter}>
      <Dialog
        open={open}
        maxWidth="xs"
        onClose={handleClosePopup}
        scroll={scrollType}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" sx={{ textAlign: 'right' }}>
          <IconButton
            size="small"
            aria-label="close"
            onClick={handleClosePopup}
            sx={{
              color: theme => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {isLoading && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ width: 400, height: 500 }}
            >
              <CustomCircularProgress size={50} thickness={5} appearance={appearance} />
            </Box>
          )}
          {paytabsUrl && !isLoading && (
            <Stack>
              <iframe
                frameBorder="0"
                width="400px"
                height="500px"
                src={paytabsUrl}
                sandbox="allow-forms allow-scripts"
              />
            </Stack>
          )}
          {paytabsCallback && !isLoading && (
            <MotionContainer initial="initial" open>
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ textAlign: 'center', mb: 4 }}
              >
                <motion.div variants={varBounceIn}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      bgcolor: 'rgba(200, 250, 205, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '100%',
                      maxWidth: '100px',
                      mx: 'auto',
                      p: 0.5,
                    }}
                  >
                    <Box
                      component={Icon}
                      icon="eva:checkmark-outline"
                      width={50}
                      height={50}
                      sx={{ color: 'primary.main' }}
                    />
                  </Box>
                </motion.div>
                <motion.div variants={varBounceIn}>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{ fontWeight: 'bold', mt: 0, fontStyle: 'italic' }}
                  >
                    Thank you for your donation!
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ mt: 0, color: 'text.secondary', fontStyle: 'italic' }}
                  >
                    ID transaction: {!!transRef && transRef}
                  </Typography>
                </motion.div>
                {dataUrlTemplate && (
                  <motion.div variants={varBounceIn}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleClosePopup}
                    >
                      <Link
                        sx={{ textDecoration: 'none', color: '#fff' }}
                        href={dataUrlTemplate}
                        download
                        variant="body2"
                      >
                        Download Gift
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </Stack>
            </MotionContainer>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
