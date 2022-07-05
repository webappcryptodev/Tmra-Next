import { Button } from '@mui/material';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'MUI v5/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'success', 'warning'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Start Free',
    size: 'medium',
    fullWidth: false,
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  variant: 'contained',
  color: 'primary',
};

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  variant: 'contained',
  color: 'secondary',
};

export const ContainedSuccess = Template.bind({});
ContainedSuccess.args = {
  variant: 'contained',
  color: 'success',
};

export const ContainedWarning = Template.bind({});
ContainedWarning.args = {
  variant: 'contained',
  color: 'warning',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  variant: 'text',
  color: 'primary',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  variant: 'text',
  color: 'secondary',
};

export const TextSuccess = Template.bind({});
TextSuccess.args = {
  variant: 'text',
  color: 'success',
};

export const TextWarning = Template.bind({});
TextWarning.args = {
  variant: 'text',
  color: 'warning',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  variant: 'outlined',
  color: 'primary',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  variant: 'outlined',
  color: 'secondary',
};

export const OutlinedSuccess = Template.bind({});
OutlinedSuccess.args = {
  variant: 'outlined',
  color: 'success',
};

export const OutlinedWarning = Template.bind({});
OutlinedWarning.args = {
  variant: 'outlined',
  color: 'warning',
};
