import SearchForm from '../components/searchForm/SearchForm';

export default {
  title: 'App/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    searchQuery: { control: 'text' },
  },
};

export const Default = {
  args: {
    initialQuery: '',
    onSearch: (query) => console.log(query)
  },
};
