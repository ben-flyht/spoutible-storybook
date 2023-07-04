import { within, userEvent } from '@storybook/testing-library';

import { Timeline } from './Timeline';

export default {
  title: 'Design System/Pages/Timeline',
  component: Timeline,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = {};