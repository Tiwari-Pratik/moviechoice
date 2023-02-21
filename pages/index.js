import MoviesGrid from "../components/ui/movies/MoviesGrid";

const { Fragment } = require("react");

const HomePage = (props) => {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <section>
        <MoviesGrid movies={props.movies} />
      </section>
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const trendingMoviesRes = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=4f7ff9c54e1708c61046ea2c3bab85f1"
  );
  const trendingMoviesData = await trendingMoviesRes.json();

  return {
    props: {
      movies: trendingMoviesData,
    },
  };
};
export default HomePage;
