import SortControl from '../components/sortControl';

export default {
  title: 'App/SortControl',
  component: SortControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentSelection: { 
      control: { type: 'select' },
      options: ['release-date', 'title'],
    },
  },
};

export const Default = {
  args: {
    currentSelection: 'release-date',
    onSelectionChange: (type) => console.log(type)
  },
};
