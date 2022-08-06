import styles from "../../../styles/Navbar.module.css";
import Image from "next/image";

import { motion } from "framer-motion";

const MenuLeft = () => {
  return (
    <div className={styles.menuLeft}>
      <div className={styles.leftWrapper}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.leftText}
        >
          <h4>An Orientation Program</h4>
          <h4>by S1 Universitas Prasetiya Mulya</h4>
        </motion.div>
        <div className={styles.navbarSocialWrapper}>
          <motion.a
            href="https://www.instagram.com/pgu.prasmul/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className={styles.socialWrapper}
          >
            <Image
              src="/images/logo-socmed/ig.png"
              alt="ig-icon"
              height={20}
              width={20}
            />
          </motion.a>
          <motion.a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className={styles.socialWrapper}
          >
            <Image
              src="/images/logo-socmed/lineadd.png"
              alt="lineadd-icon"
              height={20}
              width={20}
            />
          </motion.a>
          <motion.a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className={styles.socialWrapper}
          >
            <Image
              src="/images/logo-socmed/email.png"
              alt="email-icon"
              height={20}
              width={20}
            />
          </motion.a>
          <motion.a
            href="https://www.prasetiyamulya.ac.id/en/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className={styles.socialWrapper}
          >
            <Image
              src="/images/logo-socmed/prasmul.png"
              alt="Universitas Prasetiya Mulya"
              height={20}
              width={20}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
