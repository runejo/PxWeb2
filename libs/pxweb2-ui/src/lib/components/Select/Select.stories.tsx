import type { Meta, StoryFn } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
};
export default meta;

export const Default = {
  args: {
    variant: 'default',
    showLabel: true,
    labelText: 'Label',
  },
};

export const ShowLabel: StoryFn<typeof Select> = () => {
  return (
    <>
      <h1>ShowLabel</h1>

      <h2>With label:</h2>
      <Select showLabel labelText="Label"></Select>

      <h2>Without label:</h2>
      <Select></Select>
 
    </>
  );
};