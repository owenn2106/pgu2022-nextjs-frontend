import Image from "next/image";

import styles from "../../styles/Home.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <div className="container">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          doloremque ratione fugit, ipsa repudiandae reiciendis consequuntur
          eaque tenetur ipsum voluptates necessitatibus.
        </h3>

        <div className={styles.imageWrapper}>
          <Image src="/images/logo-pgu.png" height={60} width={108} />
          <h2>NAVIGATE THE PATH</h2>
        </div>
      </div>
    </div>
  );
};

export default Description;
