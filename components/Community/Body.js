import BodyCard from "./BodyCard";
import { SAC } from "./data/SAC";
import { HIMA } from "./data/HIMA";
import { ORG } from "./data/ORG";

import styles from "../../styles/Community/Body.module.css";

const Body = () => {
  return (
    <div className={styles.Body}>
      <h1 className={styles.CommunitySubTitle} id="sac">
        SAC &amp; SCC
      </h1>
      <div className={styles.CardWrapper}>
        {SAC.map((el) => {
          return (
            <BodyCard
              id={el.id}
              name={el.name}
              logo={el.logo}
              description={el.description}
              body1={el.body1}
              body2={el.body2}
              category="SAC &amp; SCC"
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
              id={el.id}
              name={el.name}
              logo={el.logo}
              description={el.description}
              body1={el.body1}
              body2={el.body2}
              category="HIMA"
            />
          );
        })}
      </div>
      <h1 className={styles.CommunitySubTitle} id="org">
        ORGANIZATION
      </h1>
      <div className={styles.CardWrapper}>
        {ORG.map((el) => {
          return (
            <BodyCard
              id={el.id}
              name={el.name}
              logo={el.logo}
              description={el.description}
              body1={el.body1}
              body2={el.body2}
              category="ORGANIZATION"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
