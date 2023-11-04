export interface IMovie {
  id: string;
  genres: string[];
  name: string;
  imageUrl: string;
  rating: number,
  releaseYear: string;
  description: string;
  duration: number,
}

export interface IApiMovie {
  id: string;
  title: string; 
  poster_path: string;
  release_date: string; 
  vote_average: number;
  runtime: number; 
  overview: string;
  genres: string[];
}