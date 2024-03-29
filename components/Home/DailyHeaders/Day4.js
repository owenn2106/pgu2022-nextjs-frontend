import styles from "../../../styles/Home/DailyHeader.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Day4 = () => {
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
            <div>
              <motion.h1 variants={textVariants}>Surviv(or)</motion.h1>
              <motion.h1 variants={textVariants}>LOSS</motion.h1>
            </div>
            <motion.p variants={textVariants}>
              Hold your tears, face your fears.
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Day4;
