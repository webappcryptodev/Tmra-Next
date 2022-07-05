import config from '@configuration';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

// material
// import { styled } from '@mui/material/styles';
import { Badge, IconButton } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { BadgeCounterProps } from '../../components/fundraising/CampaignCard';

export default function BadgeCart({ count }: BadgeCounterProps) {
  const isOffset = useOffSetTop(100);
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <>
      {config.fundraising.campaign.multipleCheckout && (
        <NextLink href="/cart">
          <IconButton
            aria-label="cart"
            sx={{
              mr: 3,
              ...(isHome && { color: 'common.white' }),
              ...(isOffset && { color: 'text.primary' }),
            }}
          >
            <Badge badgeContent={count} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </NextLink>
      )}
    </>
  );
}
