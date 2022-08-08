import React from "react";

import styles from "../../styles/Home/Recap.module.css";

const Recap = () => {
  return (
    <div className={styles.recapWrapper}>
      <div className={styles.whiteBoxWrapper}>
        <div className={styles.recapHeader}>
          <div className={styles.dateWrapper}></div>
          <div className={styles.valueWrapper}></div>
        </div>
        <div className={styles.recapContent}>
          <div className={styles.recapTitle}>
            <h1>Welcome Aboard</h1>
          </div>
          <div className={styles.recapBody}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
              vitae quos officiis id amet voluptatem, fugit iste beatae
              reiciendis accusantium ducimus debitis similique aut delectus,
              deserunt hic laboriosam. Maxime, tenetur atque. Magni quas nemo
              labore, ducimus quod rerum dolores, nulla earum velit corrupti
              magnam! Inventore odio vero veniam velit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
              vitae quos officiis id amet voluptatem, fugit iste beatae
              reiciendis accusantium ducimus debitis similique aut delectus,
              deserunt hic laboriosam. Maxime, tenetur atque. Magni quas nemo
              labore, ducimus quod rerum dolores, nulla earum velit corrupti
              magnam! Inventore odio vero veniam velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recap;
