import styles from "../../styles/Community/Header.module.css";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.Navigation}>
        <ul>
          <li>
            <a href=""></a>SAC &amp; SCC
          </li>
          <li>
            <a href=""></a>HIMA
          </li>
          <li>
            <a href=""></a>ORGANIZATION
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
