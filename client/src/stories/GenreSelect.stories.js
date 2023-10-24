import GenreSelect from '../components/genreSelect';

export default {
  title: 'App/GenreSelect',
  component: GenreSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedGenre: { control: 'text' },
  },
};

export const Default = {
  args: {
    genres: ['Comedy', 'Drama', 'Science', 'Action'],
    selectedGenre: 'Action',
    onSelect: (genre) => console.log(genre)
  },
};
