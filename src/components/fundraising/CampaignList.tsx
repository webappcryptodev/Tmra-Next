/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import config from '@configuration';
import { CampaignInfo, Appearance } from '@modules/fundraising/Campaign';
import { Grid, Skeleton, Button, useTheme } from '@mui/material';
import React from 'react';
import CampaignCard, { MultipleCheckoutMode } from './CampaignCard';
import NewCampaigCard from './NewCampaignCard';
import { getButtonColor } from '@utils/theme-colors';
import { useTranslation } from 'next-i18next';
import { MotionInView, varFadeInDown } from '@components/animate';

export interface CampaignListProps {
  campaigns?: CampaignInfo[];
  fetching: boolean;
  error?: string | null;
  appearance?: Appearance | null;
  donateArea: 'visible' | 'hidden';
  hrefFunc: (campaign: CampaignInfo) => string;
  hasProgress?: boolean;
  hasGift?: boolean;
  hasShare?: boolean;
  hasMap?: boolean;
  hasRemainingAmount?: boolean;
  hasCollectedAmount?: boolean;
  hasCart?: boolean;
  hasInputAmount?: boolean;
  customCheckoutAction?: (campaign: CampaignInfo) => void;
  customDonateAction?: (campaign: CampaignInfo, amount?: number | string) => void;
  setCopiedStatus?: (isCopied: boolean) => void;
  multipleCheckout?: boolean;
  showSeeMore?: boolean;
}

const SkeletonLoad = (
  <>
    {[...Array(8)].map((_, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

/**
 * Displays grid of Campaigns. The campaign cover photo will be resized using Bunny Optimizer.
 * @param props
 * @returns
 */
const CampaignList = ({
  fetching,
  campaigns,
  donateArea,
  appearance,
  hrefFunc,
  hasProgress,
  hasGift,
  hasMap,
  hasShare,
  hasRemainingAmount,
  hasCart,
  hasCollectedAmount,
  hasInputAmount,
  customCheckoutAction,
  customDonateAction,
  setCopiedStatus,
  multipleCheckout,
  showSeeMore,
}: CampaignListProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [campaignsData, setCampaignsData] = React.useState<CampaignInfo[]>([]);

  React.useEffect(() => {
    if (campaigns && campaigns.length > 0 && !campaignsData.length) {
      setCampaignsData(campaigns.splice(0, 9));
    }
  }, [campaigns, campaignsData]);

  const useMultipleCheckout = () => {
    if (multipleCheckout !== undefined && multipleCheckout !== null) {
      if (!multipleCheckout) return MultipleCheckoutMode.DISABLED;
      else return MultipleCheckoutMode.ENABLED;
    } else {
      return config.fundraising.campaign.multipleCheckout
        ? MultipleCheckoutMode.ENABLED
        : MultipleCheckoutMode.DISABLED;
    }
  };
  return (
    <Grid container spacing={3}>
      {campaignsData &&
        campaignsData.map(campaign => (
          <Grid key={campaign._id} item xs={12} sm={6} md={4}>
            <MotionInView variants={varFadeInDown}>
              <NewCampaigCard
                campaign={campaign}
                donateArea={donateArea}
                appearance={appearance!}
                hrefFunc={hrefFunc}
                multipleCheckout={useMultipleCheckout()}
                hasMap={hasMap}
                hasProgress={hasProgress}
                hasShare={hasShare}
                hasGift={hasGift}
                hasRemainingAmount={hasRemainingAmount}
                hasCollectedAmount={hasCollectedAmount}
                hasCart={hasCart}
                hasInputAmount={hasInputAmount}
                customCheckoutAction={customCheckoutAction}
                customDonateAction={customDonateAction}
                setCopiedStatus={setCopiedStatus}
              />
            </MotionInView>
          </Grid>
        ))}
      {campaigns && showSeeMore && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sx={{ pt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              style={{
                color: '#fff',
                borderColor: appearance ? getButtonColor(appearance) : theme.palette.primary.main,
                backgroundColor: appearance
                  ? getButtonColor(appearance)
                  : theme.palette.primary.main,
              }}
              onClick={() => {
                const tmp = campaignsData.concat(campaigns.splice(0, 6));
                setCampaignsData(tmp);
              }}
            >
              {t('campaign.similar_see_more')}
            </Button>
          </Grid>
        </Grid>
      )}

      {fetching && SkeletonLoad}
    </Grid>
  );
};

export default CampaignList;
