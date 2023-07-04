import { NavItem } from '../components/NavItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Components/Nav Item',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Navigational Item',
  },
};

export const Secondary = {
  args: {
    label: 'ButNavItemton',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
