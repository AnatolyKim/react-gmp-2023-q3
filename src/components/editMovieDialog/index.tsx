import { useNavigate, useOutletContext } from 'react-router-dom';

import Dialog from '../dialog';
import MovieForm from '../movieForm';
import { IApiMovie } from '../../models/movie.interface';

type EditMovieDialog = {
  service: {
    updateMovieData: (movie: IApiMovie) => Promise<void>
  }
}

export default function EditMovieDialog({ service }: EditMovieDialog) {
  const navigate = useNavigate();
  const [movieData] = useOutletContext<IApiMovie[]>();

  const onSubmit = (data: IApiMovie) => {
    service.updateMovieData(data)
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  }

  return (
    <Dialog onClose={() => navigate('/')}>
      <MovieForm onSubmit={onSubmit} genres={movieData.genres} movieInfo={movieData}></MovieForm>
    </Dialog>
  );
}
