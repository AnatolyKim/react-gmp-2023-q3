import React from 'react';
import Dialog from '../dialog';
import MovieForm from '../movieForm';
import { useNavigate, useOutletContext } from 'react-router-dom';

function EditMovieDialog({ service }) {
  const navigate = useNavigate();
  const [movieData] = useOutletContext();

  const onSubmit = (data) => {
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

export default EditMovieDialog;