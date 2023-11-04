import GenreSelect from '../genreSelect';
import styles from './styles.module.css';
import { useForm, Controller } from 'react-hook-form';
import { IApiMovie } from '../../models/movie.interface';

type MovieForm = {
  movieInfo?: IApiMovie,
  genres?: string[],
  header?: string;
  onSubmit: (data: IApiMovie) => void,
}

function MovieForm({ movieInfo, genres = [], header = 'Edit Movie', onSubmit }: MovieForm) {
  const { title, poster_path, release_date, vote_average, runtime, overview, id } = movieInfo || {};
  const { register, handleSubmit, control, formState: { errors }, } = useForm({
    defaultValues: {
      id: id || '',
      title: title || '',
      poster_path: poster_path || '',
      release_date: release_date || '',
      vote_average: vote_average || 0,
      runtime: runtime || 0,
      overview: overview || '',
      genres: movieInfo?.genres || []
    }
  });

  return (
    <form className={styles.movieForm} onSubmit={handleSubmit((data) => onSubmit(data))}>
      <h3 className={styles.formHeader}>{header}</h3>
      <div className={`${styles.gridContainer} ${styles.formControls}`}>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Movie Title</span>
          <input type="text" {...register("title", { required: true })} />
          {errors.title?.type === "required" && (
            <p className={styles.error} role="alert">Title is required</p>
          )}
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Poster URL</span>
          <input type="text" {...register("poster_path", { required: true })} />
          {errors.poster_path?.type === "required" && (
            <p className={styles.error} role="alert">Poster URL is required</p>
          )}
        </label>
        <div className={`${styles.gridItem} ${styles.formControl}`}>
          <Controller
            name="genres"
            control={control}
            defaultValue={[]}
            rules={{ required: true }}
            render={({ field }) => (
              <GenreSelect
                genres={genres}
                selectedGenres={movieInfo?.genres || []}
                onSelect={(value: string[]) => field.onChange(value)}
              />
            )}
          />
          {errors.genres?.type === "required" && (
            <p className={styles.error} role="alert">Genres are required</p>
          )}
        </div>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Release Date</span>
          <input type="date" {...register("release_date", { required: true })} />
          {errors.release_date?.type === "required" && (
            <p className={styles.error} role="alert">Release date is required</p>
          )}
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Rating</span>
          <input type="number" step="0.1" {...register("vote_average", { required: true, min: 0 })} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Runtime</span>
          <input type="number" {...register("runtime", { min: 1 })} />
          {errors.runtime?.type === "min" && (
            <p className={styles.error} role="alert">Runtime should be set</p>
          )}
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Overview</span>
          <textarea {...register("overview", { required: true })}></textarea>
          {errors.overview?.type === "required" && (
            <p className={styles.error} role="alert">Overview is required</p>
          )}
        </label>
      </div>
      <div className={styles.formActions}>
        <button type="reset" className="secondary">Reset</button>
        <button type="submit" className="primary">Submit</button>
      </div>
    </form>
  );
}

export default MovieForm;