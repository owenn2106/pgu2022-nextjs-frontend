import styles from "../../styles/Home/Home.module.css";
import { motion, AnimatePresence, m } from "framer-motion";

const Header = () => {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
    },
  };

  const textVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <section className={styles.header}>
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={styles.headerText}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={headerVariants}
          >
            <motion.h1 variants={textVariants}>A Guiding Light</motion.h1>
            <motion.h1 variants={textVariants}>ON YOUR</motion.h1>
            <motion.h1 variants={textVariants}>FIRST VOYAGE</motion.h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Header;
