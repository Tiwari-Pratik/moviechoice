import Image from "next/image";
import styles from "./MovieItem.module.css";

const MovieItem = (props) => {
  const { title, poster, description, rating } = props;
  return (
    <div className={styles.movie}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={title}
        width={200}
        height={200}
        className={styles.image}
        priority
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{rating}</p>
    </div>
  );
};
export default MovieItem;
