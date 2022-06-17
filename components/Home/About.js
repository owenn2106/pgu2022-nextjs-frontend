import styles from "../../styles/Home/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutTitle}>
            <h2>ABOUT US</h2>
          </div>
          <div className={styles.aboutContent}>
            <p>
              Prasmul Gear Up is an orientation program dedicated by Universitas
              Prasetiya Mulya at the start of a new academic year. This year's
              program will feature virtual and onsite activities to utilize
              freshmen leaping from high school to university life.
            </p>
            <br />
            <p>
              Our vision as an orientation program is to equip freshmen to adapt
              to university life through Prasetiya Mulya's values and
              principles. With this year's semi-hybrid program, activities would
              be done differently than in previous years. Our program would
              feature a mix of online and onsite activities of various training
              programs, informative lectures, and workshops. We aim to deliver
              knowledge and understanding uniquely, whilst reverting the stigma
              of burdening orientation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
