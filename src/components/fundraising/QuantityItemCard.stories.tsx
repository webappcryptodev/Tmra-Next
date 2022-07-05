import { CampaignIslamCharityType } from '@generated/graphql';
import { CampaignInfo } from '@modules/fundraising/Campaign';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import QuantityItemCard from './NewQuantityItemCard';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

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

export default {
  title: 'Tmra/fundraising/QuantityItemCard',
  component: QuantityItemCard,
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
} as ComponentMeta<typeof QuantityItemCard>;

const CAMPAIGN: CampaignInfo = {
  title: 'Build a mosque in Sumbawa',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QuantityItemCard> = args => (
  <QuantityItemCard {...args} hrefFunc={campaign => campaign.toString()} />
);

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
  appearance: {
    usePallete: true,
    lButton: '#3f65eb',
    accent: '#3fd6eb',
  },
  hrefFunc: campaign => `${campaign._id}`,
  hasProgress: true,
  hasGift: true,
  hasShare: true,
  hasMap: true,
  hasRemainingAmount: true,
  hasCollectedAmount: true,
  hasCart: true,
  hasInputAmount: true,
};
