import Link from "next/link";
import Logo from "../site/Logo";
// import AccountIcon from "../ui/icons/AccountIcon";
// import HomeIcon from "../ui/icons/HomeIcon";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.nav_links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">Account</Link>
        </li>
      </ul>
      <Logo />
    </nav>
  );
};

export default Navigation;
