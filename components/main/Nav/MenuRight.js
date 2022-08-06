import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../../../styles/Navbar.module.css";

const MenuRight = ({ toggle }) => {
  return (
    <div className={styles.menuRight}>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={styles.navItem}
      >
        <Link href="/">
          <a className={styles.navLinks} onClick={toggle}>
            Home
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles.navItem}
        onClick={toggle}
      >
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
      </motion.div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.navItem}
        onClick={toggle}
      >
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
      </motion.div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={styles.navItem}
      >
        <Link href="/leaderboard/">
          <a className={styles.navLinks} onClick={toggle}>
            Leaderboard
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={styles.navItem}
      >
        <Link href="/community/">
          <a className={styles.navLinks} onClick={toggle}>
            Community Life
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default MenuRight;
