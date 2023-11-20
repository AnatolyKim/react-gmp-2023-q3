import { useNavigate } from 'react-router-dom';

import Dialog from '../dialog';
import MovieForm from '../movieForm';

import { IApiMovie } from '../../models/movie.interface';
import { useDispatch } from '../../store';
import { postMovie } from '../../store/moviesSlice';


export default function AddMovieDialog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: IApiMovie) => {
    dispatch(postMovie(data))
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  }

  return (
    <Dialog onClose={() => navigate('/')}>
      <MovieForm onSubmit={onSubmit} genres={['Action', 'Comedy', 'Drama']}></MovieForm>
    </Dialog>
  );
}
