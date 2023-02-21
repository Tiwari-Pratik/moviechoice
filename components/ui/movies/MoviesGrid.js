import MovieItem from "./MovieItem";
import styles from "./MoviesGrid.module.css";

const MoviesGrid = (props) => {
  const { movies } = props;
  return (
    <section className={styles.movieGrid}>
      {movies.results.map((movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          description={movie.overview}
          poster={movie.poster_path}
          rating={movie.vote_average}
        />
      ))}
    </section>
  );
};

export default MoviesGrid;
