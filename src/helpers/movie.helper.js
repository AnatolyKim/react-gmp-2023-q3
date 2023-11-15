
export const mapMovieData = (movie) => {
  const { title, poster_path, vote_average, release_date, overview, genres, runtime, id } = movie;

  return {
    id,
    genres,
    name: title,
    imageUrl: poster_path,
    rating: vote_average,
    releaseYear: release_date.slice(0, 4),
    description: overview,
    duration: runtime,
  }
}