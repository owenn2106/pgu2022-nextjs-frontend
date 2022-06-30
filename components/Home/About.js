import Image from "next/image";
import styles from "../../styles/Home/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutTitle}>
            <h2 data-aos="fade-up">ABOUT US</h2>
            <div className={styles.decorWrapper} data-aos="fade-up">
              <Image
                src="/images/decor/wave.png"
                alt="wave-decor"
                width={450}
                height={250}
              />
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div data-aos="fade-left">
              <p>
                Prasmul Gear Up is an orientation program dedicated by
                Universitas Prasetiya Mulya at the start of a new academic year.
                This year&apos;s program will feature virtual and onsite
                activities to utilize freshmen leaping from high school to
                university life.
              </p>
            </div>
            <br />
            <div data-aos="fade-left">
              <p>
                Our vision as an orientation program is to equip freshmen to
                adapt to university life through Prasetiya Mulya&apos;s values
                and principles. With this year&apos;s hybrid program, activities
                would be done differently than in previous years. Our program
                would feature a mix of online and onsite activities of various
                training programs, informative lectures, and workshops. We aim
                to deliver knowledge and understanding uniquely, whilst
                reverting the stigma of burdening orientation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
