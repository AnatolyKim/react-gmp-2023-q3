import React from 'react';
import Dialog from '../dialog';
import MovieForm from '../movieForm';
import { useNavigate } from 'react-router-dom';

function AddMovieDialog({ service }) {
  const navigate = useNavigate();

  const onSubmit = (data) => {
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