import Counter from '../components/counter/Counter';

export default {
  title: 'App/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
  },
};

export const Default = {
  args: {
    count: 1,
  },
};
