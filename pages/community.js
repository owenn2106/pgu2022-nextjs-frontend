import Body from "../components/Community/Body";

import styles from "../styles/Community/Body.module.css";

const community = () => {
  return (
    <div className="container">
      <div className={styles.BodyWrapper}></div>
      <Body />
    </div>
  );
};

export default community;
