export const movieLoader = async (req) => {
  const { params } = req;
  const res = await fetch(`http://localhost:4000/movies/${params.movieId}`);
  const movie = await res.json();

  return movie;
}