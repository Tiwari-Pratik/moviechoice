import MoviesGrid from "../components/ui/movies/MoviesGrid";

const { Fragment } = require("react");

const HomePage = () => {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <section>
        <MoviesGrid />
      </section>
    </Fragment>
  );
};

export default HomePage;
