import Navigation from "./Navigation";
import { Fragment } from "react";

const MainHeader = (props) => {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
};
export default MainHeader;
