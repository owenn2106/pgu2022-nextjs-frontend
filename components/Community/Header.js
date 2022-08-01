import { motion } from "framer-motion";

import styles from "../../styles/Community/Header.module.css";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.Navigation}>
        <ul>
          <li>
            <a
              onClick={(e) =>
                setTimeout(() => {
                  document.getElementById("org") &&
                    document
                      .getElementById("org")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200)
              }
            >
              ORGANIZATION
            </a>
          </li>
          <li>
            <a
              onClick={(e) =>
                setTimeout(() => {
                  document.getElementById("hima") &&
                    document
                      .getElementById("hima")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200)
              }
            >
              HIMA
            </a>
          </li>
          <li>
            <a
              onClick={(e) =>
                setTimeout(() => {
                  document.getElementById("sac") &&
                    document
                      .getElementById("sac")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200)
              }
            >
              SAC &amp; SCC
            </a>
          </li>
          <li>
            <a
              onClick={(e) =>
                setTimeout(() => {
                  document.getElementById("committee") &&
                    document
                      .getElementById("committee")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200)
              }
            >
              COMMITTEE
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.Title}>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          COMMUNITY
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          LIFE
        </motion.h3>
      </div>
    </div>
  );
};

export default Header;
