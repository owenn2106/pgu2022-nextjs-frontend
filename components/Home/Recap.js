import { motion } from "framer-motion";

import styles from "../../styles/Home/Recap.module.css";

const Recap = () => {
  return (
    <div className={styles.recapWrapper}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.whiteBoxWrapper}
      >
        <div className={styles.recapHeader}>
          <div className={styles.dateWrapper}>
            <h2>Daily Recap</h2>
            <h3>16 August 2022</h3>
          </div>
          <div className={styles.valueWrapper}>
            <div>
              <p>Maturity</p>
              {/* <p>Thinking</p> */}
            </div>
            <hr />
            <p>Achieving</p>
          </div>
        </div>
        <div className={styles.recapContent}>
          <div className={styles.recapTitle}>
            <h3>All Hands on Deck</h3>
          </div>
          <div className={styles.recapBody}>
            <p>
              The fifth day of Prasmul Gear up 2022 focused on maturity and
              achieving. Today&apos;s sessions were brought by Titan Tyra, Barry
              Likumahuwa, and Greysia Polii. As a content creator and
              entrepreneur, Titan showed us what it means to be mature by
              conquering ourselves and building a positive mindset. She
              mentioned self-awareness as a need for people to progress and
              develop. Also, by being in the music industry, Barry&apos;s
              understanding of maturity taught us the importance of maximizing
              opportunities to enhance ourselves.
            </p>
            <br />
            <p>
              Meanwhile, Greysia Polii told us about her struggles as an athlete
              and one of her sayings that could be quoted is “Achieving
              something is good, but we have to be careful with what we are
              going to achieve”. This implies that we have to set objective(s)
              carefully to achieve something.
            </p>
            <br />
            <p>
              Through this opportunity, hopefully voyagers could learn the
              significance of Maturity and Achieving and also be able to put it
              into their everyday lives.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Recap;
