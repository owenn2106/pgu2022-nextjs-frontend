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
        <Link href="/">
          <a
            className={styles.navLinks}
            onClick={(e) =>
              setTimeout(() => {
                document.getElementById("about") &&
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth", block: "end" });
              }, 500)
            }
          >
            About Us
          </a>
        </Link>
      </div>
      <div className={styles.navItem} onClick={toggle}>
        <Link href="/">
          <a
            className={styles.navLinks}
            onClick={(e) =>
              setTimeout(() => {
                document.getElementById("program") &&
                  document
                    .getElementById("program")
                    .scrollIntoView({ behavior: "smooth", block: "end" });
              }, 500)
            }
          >
            Program Overview
          </a>
        </Link>
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
