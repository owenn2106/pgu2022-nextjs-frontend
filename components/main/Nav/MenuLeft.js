// import { useState, useEffect } from "react";
import styles from "../../../styles/Navbar.module.css";
import Image from "next/image";

// import { useWindowSize } from "../../hooks";

const MenuLeft = () => {
  // const [width, height] = useWindowSize();
  // const [imageHeight, setImageHeight] = useState(480);
  // const [imageWidth, setImageWidth] = useState(750);

  // useEffect(() => {
  //   if (width > 1200) {
  //     setImageHeight(480);
  //     setImageWidth(750);
  //   } else if (width <= 1200) {
  //     setImageHeight(320);
  //     setImageWidth(500);
  //   }
  // }, [width]);

  return (
    <div className={styles.menuLeft}>
      {/* <div className={styles.navbarLogoWrapper}>
        <Image
          src="/images/logo-pgu.png"
          height={imageHeight}
          width={imageWidth}
        />
      </div> */}

      <div className={styles.navbarSocialWrapper}>
        <a href="#" className={styles.navbarSocial}>
          <Image src="/" height={150} width={150} />
        </a>
      </div>
    </div>
  );
};

export default MenuLeft;
