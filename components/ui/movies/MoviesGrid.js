import MovieItem from "./MovieItem";
import styles from "./MoviesGrid.module.css";

const MoviesGrid = () => {
  return (
    <section className={styles.movieGrid}>
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </section>
  );
};

export default MoviesGrid;
