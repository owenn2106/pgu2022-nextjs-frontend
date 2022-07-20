import Image from "next/image";
import { motion } from "framer-motion";

import styles from "../../styles/Home/LodeFA.module.css";

const LodeFA = () => {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.lodeFA}>
      <div className="container">
        <motion.div
          className={styles.lodeFAWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={wrapperVariants}
        >
          <motion.div className={styles.topic1} variants={itemVariants}>
            <div className={styles.subtitle}>
              <Image
                src="/images/decor/lodestar-star.png"
                width={70}
                height={70}
                alt="star"
              />
              <h2>Lodestar</h2>
            </div>
            <div className={styles.subcontent}>
              <p>
                A mentor that will serve as your guide in entering university
                life. Lodestars will be there for you along the journey and
                moments after it.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.topic2} variants={itemVariants}>
            <div className={styles.subtitle}>
              <Image
                src="/images/decor/fa-star.png"
                width={70}
                height={70}
                alt="star"
              />
              <h2>Facilitator</h2>
            </div>
            <div className={styles.subcontent}>
              <p>
                A person that will educate and discipline freshmen to ensure the
                completion and timeliness of their projects throughout the
                journey.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LodeFA;
