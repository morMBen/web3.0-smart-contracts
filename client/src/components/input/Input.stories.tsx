import React from 'react';
import { Story, Meta } from '@storybook/react';
import Input from '.';
import { InputProps } from './style';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {},
};

export default meta;
const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  name: 'brr',
  type: 'text',
  value: 'Primary',
  placeholder: '',
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'brr',
  type: 'text',
  value: 'Secondary',
  placeholder: '',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
