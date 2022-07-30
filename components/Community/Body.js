import BodyCard from "./BodyCard";
import { SAC } from "./data/SAC";
import { HIMA } from "./data/HIMA";
import { ORG } from "./data/ORG";
import { COMMITTEE } from "./data/COMMITTEE";

import styles from "../../styles/Community/Body.module.css";

const Body = () => {
  return (
    <div className={styles.Body}>
      <h1 className={styles.CommunitySubTitle} id="org">
        ORGANIZATION
      </h1>
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
      <h1 className={styles.CommunitySubTitle} id="hima">
        HIMA
      </h1>
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
      <h1 className={styles.CommunitySubTitle} id="sac">
        SAC &amp; SCC
      </h1>
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
      <h1 className={styles.CommunitySubTitle} id="sac">
        COMMITTEE
      </h1>
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
