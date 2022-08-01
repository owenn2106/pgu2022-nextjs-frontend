import Image from "next/image";
import styles from "../../styles/Home/About.module.css";
import { motion } from "framer-motion";

const About = () => {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants1 = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants2 = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 0.5,
    },
  };

  return (
    <div className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.aboutWrapper}>
          <motion.div
            className={styles.aboutTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={wrapperVariants}
          >
            <motion.h2 variants={itemVariants1}>ABOUT US</motion.h2>
            <motion.div
              className={styles.decorWrapper}
              variants={itemVariants1}
            >
              <Image
                src="/images/decor/wave.png"
                alt="wave-decor"
                width={450}
                height={250}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.aboutContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={wrapperVariants}
          >
            <motion.div variants={itemVariants2}>
              <p>
                Prasmul Gear Up is an orientation program dedicated by
                Universitas Prasetiya Mulya at the start of a new academic year.
                This year&apos;s program will feature virtual and onsite
                activities to utilize freshmen leaping from high school to
                university life.
              </p>
            </motion.div>
            <br />
            <motion.div variants={itemVariants2}>
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
