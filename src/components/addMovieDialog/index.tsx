import { IApiMovie } from '../../models/movie.interface';
import Dialog from '../dialog';
import MovieForm from '../movieForm';
import { useNavigate } from 'react-router-dom';

type AddMovieDialog = {
  service: {
    postMovieData: (movie: IApiMovie) => Promise<void>
  }
}

function AddMovieDialog({ service }: AddMovieDialog) {
  const navigate = useNavigate();

  const onSubmit = (data: IApiMovie) => {
    service.postMovieData(data)
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  }

  return (
    <Dialog onClose={() => navigate('/')}>
      <MovieForm onSubmit={onSubmit} genres={['Action', 'Comedy', 'Drama']}></MovieForm>
    </Dialog>
  );
}

export default AddMovieDialog;