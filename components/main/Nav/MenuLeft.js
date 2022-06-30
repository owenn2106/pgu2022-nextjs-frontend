import styles from "../../../styles/Navbar.module.css";
import Image from "next/image";

const MenuLeft = () => {
  return (
    <div className={styles.menuLeft}>
      <div className={styles.leftWrapper}>
        <div className={styles.leftText}>
          <h4>An Orientation Program</h4>
          <h4>by S1 Universitas Prasetiya Mulya</h4>
        </div>
        <div className={styles.navbarSocialWrapper}>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialWrapper}
          >
            <Image
              src="/images/logo-socmed/ig.png"
              alt="ig-icon"
              height={20}
              width={20}
            />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialWrapper}
          >
            <Image
              src="/images/logo-socmed/lineadd.png"
              alt="lineadd-icon"
              height={20}
              width={20}
            />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialWrapper}
          >
            <Image
              src="/images/logo-socmed/email.png"
              alt="email-icon"
              height={20}
              width={20}
            />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialWrapper}
          >
            <Image
              src="/images/logo-socmed/prasmul.png"
              alt="prasmul-logo"
              height={20}
              width={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
