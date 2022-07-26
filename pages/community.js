import Header from "../components/Community/Header";
import Body from "../components/Community/Body";

import styles from "../styles/Community/Body.module.css";

const community = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.BodyWrapper}>
          <Body />
        </div>
      </div>
    </>
  );
};

export default community;
