import Link from "next/link";

import styles from "../../../styles/Navbar.module.css";

const MenuRight = ({ toggle }) => {
  return (
    <div className={styles.menuRight}>
      <div className={styles.navItem}>
        <Link href="/">
          <a className={styles.navLinks} onClick={toggle}>
            Home
          </a>
        </Link>
      </div>
      <div className={styles.navItem} onClick={toggle}>
        <a
          href="/"
          className={styles.navLinks}
          onClick={(e) => {
            let hero = document.getElementById("about");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "end" });
          }}
        >
          About Us
        </a>
      </div>
      <div className={styles.navItem} onClick={toggle}>
        <a
          href="/"
          className={styles.navLinks}
          onClick={(e) => {
            let hero = document.getElementById("program");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Program Overview
        </a>
      </div>
      <div className={styles.navItem}>
        <Link href="/leaderboard/">
          <a className={styles.navLinks} onClick={toggle}>
            Leaderboard
          </a>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href="/community/">
          <a className={styles.navLinks} onClick={toggle}>
            Community Life
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MenuRight;
