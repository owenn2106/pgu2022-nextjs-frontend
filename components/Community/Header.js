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
        </ul>
      </div>
      <div className={styles.Title}>
        <h1>COMMUNITY</h1>
        <h3>LIFE</h3>
      </div>
    </div>
  );
};

export default Header;
