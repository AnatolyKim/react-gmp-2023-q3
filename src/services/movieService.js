export default class MovieService {
  static postMovieData = (data) => {
    try {
      return fetch("http://localhost:4000/movies/", {
        method: "POST",
        body: JSON.stringify(MovieService.parseFormData(data)),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    } catch (error) {
      console.error(error)
    }
  }
  
  static parseFormData = (data) => {
    const { title, poster_path, vote_average, release_date, overview, genres, runtime } = data;
  
    return {
      title,
      poster_path,
      release_date,
      overview,
      genres,
      vote_average: +vote_average,
      runtime: +runtime
    }
  }
}
