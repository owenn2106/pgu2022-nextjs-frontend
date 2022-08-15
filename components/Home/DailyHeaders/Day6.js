import styles from "../../../styles/Home/DailyHeader.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Day6 = () => {
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
        duration: 0.5,
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
            <motion.h1 variants={textVariants}>No Rainbow</motion.h1>
            <motion.h1 variants={textVariants}>WITHOUT RAIN</motion.h1>
            <motion.p variants={textVariants}>
              The dawn of a new voyage.
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Day6;
