import { useNavigate, useOutletContext } from 'react-router-dom';

import Dialog from '../dialog';
import MovieForm from '../movieForm';

import { IApiMovie } from '../../models/movie.interface';
import { updateMovie } from '../../store/moviesSlice';
import { useDispatch } from '../../store';

export default function EditMovieDialog() {
  const navigate = useNavigate();
  const [movieData] = useOutletContext<IApiMovie[]>();
  const dispatch = useDispatch();

  const onSubmit = (data: IApiMovie) => {
      dispatch(updateMovie(data))
      .then(() => navigate('/'))
      .catch((err: Error) => console.error(err));
  }

  return (
    <Dialog onClose={() => navigate('/')}>
      <MovieForm onSubmit={onSubmit} genres={movieData.genres} movieInfo={movieData}></MovieForm>
    </Dialog>
  );
}
