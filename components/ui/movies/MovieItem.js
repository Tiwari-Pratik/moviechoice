import Image from "next/image";
import styles from "./MovieItem.module.css";

const MovieItem = () => {
  return (
    <div className={styles.movie}>
      <Image src="/images/movie1.jpg" alt="movie" width={300} height={200} />
      <h3>title</h3>
      <p>description</p>
      <p>rating</p>
    </div>
  );
};
export default MovieItem;
