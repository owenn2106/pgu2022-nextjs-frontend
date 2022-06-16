import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className="container">
        <div className={styles.headerText}>
          <h1>A Guiding Light</h1>
          <h1>ON YOUR</h1>
          <h1>FIRST VOYAGE</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
