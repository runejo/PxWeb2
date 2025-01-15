import type { Meta, StoryFn } from '@storybook/react';

import { SideSheet, SideSheetProps } from './SideSheet';

const meta: Meta<typeof SideSheet> = {
  component: SideSheet,
  title: 'Components/SideSheet',
};
export default meta;

const content = 'Any content...';

export const Default = {
  args: {
    isOpen: true,
    onClose: () => {
      console.log('Modal closed');
    },
    children: <div>{content}</div>,
  },

  render: (args: SideSheetProps) => (
    <SideSheet {...args}>{content && <div>{content}</div>}</SideSheet>
  ),

  return: SideSheet,
};

export const Open: StoryFn<typeof SideSheet> = () => {
  return (
    <SideSheet
      isOpen={true}
      onClose={() => {
        alert('SideSheet closed');
      }}
    >
      <div>Any content</div>
    </SideSheet>
  );
};
