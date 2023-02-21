import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <h2>MovieChoice</h2>
    </Link>
  );
};

export default Logo;
