import Image from "next/image";

import styles from "../../styles/Home/LodeFA.module.css";

const LodeFA = () => {
  return (
    <div className={styles.lodeFA}>
      <div className="container">
        <div className={styles.lodeFAWrapper}>
          <div className={styles.topic1}>
            <div className={styles.subtitle} data-aos="fade-up">
              <Image
                src="/images/decor/lodestar-star.png"
                width={70}
                height={70}
                alt="star"
              />
              <h2>Lodestar</h2>
            </div>
            <div className={styles.subcontent} data-aos="fade-up">
              <p>
                A mentor that will serve as your guide in entering university
                life. Lodestars will be there for you along the journey and
                moments after it.
              </p>
            </div>
          </div>
          <div className={styles.topic2}>
            <div
              className={styles.subtitle}
              data-aos="fade-up"
              data-aos-offset="300"
            >
              <Image
                src="/images/decor/fa-star.png"
                width={70}
                height={70}
                alt="star"
              />
              <h2>Facilitator</h2>
            </div>
            <div
              className={styles.subcontent}
              data-aos="fade-up"
              data-aos-offset="300"
            >
              <p>
                A person that will educate and discipline freshmen to ensure the
                completion and timeliness of their projects throughout the
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LodeFA;
