import { CampaignIslamCharityType } from '@generated/graphql';
import { CampaignInfo } from '@modules/fundraising/Campaign';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import NewCampaignCard, { MultipleCheckoutMode } from './NewCampaignCard';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import { Snackbar, Alert } from '@mui/material';

// A super-simple mock of a redux store
const Mockstore = ({ children }) => (
  <Provider
    store={configureStore({
      reducer: { dummy: (state, action) => state ?? null },
    })}
  >
    {children}
  </Provider>
);

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default {
  title: 'Tmra/fundraising/CampaignCard',
  component: NewCampaignCard,
  args: {
    hrefFunc: campaign => campaign.toString(),
  },
  decorators: [
    Story => (
      <Mockstore>
        <div style={{ maxWidth: 360 }}>
          <Story />
        </div>
      </Mockstore>
    ),
  ],
} as ComponentMeta<typeof NewCampaignCard>;

const CAMPAIGN: CampaignInfo = {
  title: 'Build a mosque in Sumbawa',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewCampaignCard> = args => {
  const [isCopied, setCopied] = React.useState(false);
  return (
    <>
      <NewCampaignCard {...args} setCopiedStatus={val => setCopied(val)} />
      <Snackbar
        open={isCopied}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
      >
        <Alert onClose={() => setCopied(false)} severity="success">
          Copied
        </Alert>
      </Snackbar>
    </>
  );
};

const postPayment = async (campaign, amount) => {
  try {
    const path = `${publicRuntimeConfig.tmra.fund.url}/v1/paytabs/request`;

    const paymentData = {
      campaignId: campaign._id,
      campaignTitle: campaign.title,
      amount: amount.toString(),
      userId: '12345',
      currency: campaign.currencyCode,
    };
    const { data } = await axios.post(path, paymentData);
    window.open(data.data.redirect_url, '_blank');
  } catch (error: any) {
    console.log(error);
  }
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Basic = Template.bind({});
Basic.args = {
  campaign: {
    _id: 'abcdef',
    organizationId: 'abcdef',
    title: 'Donate to mosques',
    currencyCode: 'USD',
    coverImage:
      'tmra/production/campaign-image/lets-build-house-in-paradise-by-build-mosque-61cc1e025d053e74fe15d0ce-5714.jpg',
    amountProgress: '15464',
    amountTarget: '30000',
    description: 'Really good mosque',
    islamCharityType: CampaignIslamCharityType.Infaq,
  },
  donateArea: 'hidden',
  appearance: {
    usePallete: true,
    lButton: '#3f65eb',
    accent: '#3fd6eb',
  },
  hrefFunc: campaign => `/${campaign._id}`,
  multipleCheckout: MultipleCheckoutMode.DISABLED,
  hasProgress: true,
  hasGift: true,
  hasShare: true,
  hasMap: true,
  hasRemainingAmount: true,
  hasCollectedAmount: true,
  hasCart: true,
  hasInputAmount: true,
};

export const Donate = Template.bind({});
Donate.args = {
  campaign: {
    _id: 'abcdef',
    organizationId: 'abcdef',
    title: 'Donate to mosques',
    currencyCode: 'USD',
    coverImage:
      'tmra/production/campaign-image/lets-build-house-in-paradise-by-build-mosque-61cc1e025d053e74fe15d0ce-5714.jpg',
    amountProgress: '15464',
    amountTarget: '30000',
    description: 'Really good mosque',
    islamCharityType: CampaignIslamCharityType.Infaq,
  },
  donateArea: 'visible',
  appearance: {
    usePallete: true,
    lButton: '#3f65eb',
    accent: '#3fd6eb',
  },
  hrefFunc: campaign => `/${campaign._id}`,
  multipleCheckout: MultipleCheckoutMode.DISABLED,
  hasProgress: true,
  hasGift: true,
  hasShare: true,
  hasMap: true,
  hasRemainingAmount: true,
  hasCollectedAmount: true,
  hasCart: true,
  hasInputAmount: true,
};

export const CustomDonateAction = Template.bind({});
CustomDonateAction.args = {
  campaign: {
    _id: 'abcdef',
    organizationId: 'abcdef',
    title: 'Donate to mosques',
    currencyCode: 'USD',
    coverImage:
      'tmra/production/campaign-image/lets-build-house-in-paradise-by-build-mosque-61cc1e025d053e74fe15d0ce-5714.jpg',
    amountProgress: '15464',
    amountTarget: '30000',
    description: 'Really good mosque',
    islamCharityType: CampaignIslamCharityType.Infaq,
  },
  donateArea: 'visible',
  appearance: {
    usePallete: true,
    lButton: '#3f65eb',
    accent: '#3fd6eb',
  },
  hrefFunc: campaign => `/${campaign._id}`,
  multipleCheckout: MultipleCheckoutMode.DISABLED,
  hasProgress: true,
  hasGift: true,
  hasShare: true,
  hasMap: true,
  hasRemainingAmount: true,
  hasCollectedAmount: true,
  hasCart: true,
  hasInputAmount: true,
  customDonateAction: (campaign, amount) => postPayment(campaign, amount),
};

export const MultipleCheckout = Template.bind({});
MultipleCheckout.args = {
  campaign: {
    _id: 'abcdef',
    organizationId: 'abcdef',
    title: 'Donate to mosques',
    currencyCode: 'USD',
    coverImage:
      'tmra/production/campaign-image/lets-build-house-in-paradise-by-build-mosque-61cc1e025d053e74fe15d0ce-5714.jpg',
    amountProgress: '15464',
    amountTarget: '30000',
    description: 'Really good mosque',
    islamCharityType: CampaignIslamCharityType.Infaq,
  },
  donateArea: 'hidden',
  appearance: {
    usePallete: true,
    lButton: '#3f65eb',
    accent: '#3fd6eb',
  },
  hrefFunc: campaign => `/${campaign._id}`,
  multipleCheckout: MultipleCheckoutMode.ENABLED,
  hasProgress: true,
  hasGift: true,
  hasShare: true,
  hasMap: true,
  hasRemainingAmount: true,
  hasCollectedAmount: true,
  hasCart: true,
  hasInputAmount: true,
};
