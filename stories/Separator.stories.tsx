import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Separator from '../components/Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => <Separator {...args} />;

export const Primary = Template.bind({});
Primary.args = {};