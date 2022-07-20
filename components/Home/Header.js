import styles from "../../styles/Home/Home.module.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.section className={styles.header} exit={{ opacity: 0 }}>
      <div className="container">
        <div className={styles.headerText}>
          <h1>A Guiding Light</h1>
          <h1>ON YOUR</h1>
          <h1>FIRST VOYAGE</h1>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
