import styles from "../../styles/Home/Description.module.css";
import { motion } from "framer-motion";

const Description = () => {
  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
    },
  };

  return (
    <div className={styles.description}>
      <div style={{ margin: "0 auto", width: "100%" }}>
        <motion.div
          className={styles.titleWrapper}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
          variants={wrapperVariants}
        >
          <motion.h2
            className={styles.descriptionTitle1}
            variants={itemVariants}
          >
            WELCOME
          </motion.h2>
          <motion.img
            src="/images/decor/blue-line.png"
            alt="blue-line"
            variants={lineVariants}
          />
          <motion.h2
            className={styles.descriptionTitle2}
            variants={itemVariants}
          >
            VOYAGERS
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.descriptionContent}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            As Voyagers, you have to be able to survive throughout the whole
            journey. You must sail across the sea to reach your goal, navigating
            through tides and storms. The journey won&apos;t go easy, so prepare
            yourselves.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
