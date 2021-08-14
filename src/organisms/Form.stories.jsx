import React from 'react';

import { Form } from './Form';

export default {
  title: 'Organisms/Form',
  component: Form,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Form {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};