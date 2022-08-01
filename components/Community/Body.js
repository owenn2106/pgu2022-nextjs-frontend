import { motion } from "framer-motion";

import BodyCard from "./BodyCard";
import { SAC } from "./data/SAC";
import { HIMA } from "./data/HIMA";
import { ORG } from "./data/ORG";
import { COMMITTEE } from "./data/COMMITTEE";

import styles from "../../styles/Community/Body.module.css";

const Body = () => {
  return (
    <div className={styles.Body}>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={styles.CommunitySubTitle}
        id="org"
      >
        ORGANIZATION
      </motion.h1>
      <div className={styles.CardWrapper}>
        {ORG.map((el) => {
          return (
            <BodyCard
              key={el.id}
              id={el.id}
              name={el.name}
              logo={el.logo}
              description={el.description}
              body1={el.body1}
              body2={el.body2}
              cp_name={el.cp_name}
              cp_line={el.cp_line}
              cp_wa={el.cp_wa}
              category="ORGANIZATION"
            />
          );
        })}
      </div>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={styles.CommunitySubTitle}
        id="hima"
      >
        HIMA
      </motion.h1>
      <div className={styles.CardWrapper}>
        {HIMA.map((el) => {
          return (
            <BodyCard
              key={el.id}
              id={el.id}
              name={el.name}
              logo={el.logo}
              description={el.description}
              body1={el.body1}
              body2={el.body2}
              cp_name={el.cp_name}
              cp_line={el.cp_line}
              cp_wa={el.cp_wa}
              category="HIMA"
            />
          );
        })}
      </div>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={styles.CommunitySubTitle}
        id="sac"
      >
        SAC &amp; SCC
      </motion.h1>
      <div className={styles.CardWrapper}>
        {SAC.map((el) => {
          return (
            <BodyCard
              key={el.id}
              id={el.id}
              name={el.name}
              logo={el.logo}
              description={el.description}
              body1={el.body1}
              body2={el.body2}
              cp_name={el.cp_name}
              cp_line={el.cp_line}
              cp_wa={el.cp_wa}
              category="SAC &amp; SCC"
            />
          );
        })}
      </div>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={styles.CommunitySubTitle}
        viewport={{ once: true }}
        id="committee"
      >
        COMMITTEE
      </motion.h1>
      <div className={styles.CardWrapper}>
        {COMMITTEE.map((el) => {
          return (
            <BodyCard
              key={el.id}
              id={el.id}
              name={el.name}
              logo={el.logo}
              description={el.description}
              body1={el.body1}
              body2={el.body2}
              cp_name={el.cp_name}
              cp_line={el.cp_line}
              cp_wa={el.cp_wa}
              category="COMMITTEE"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
