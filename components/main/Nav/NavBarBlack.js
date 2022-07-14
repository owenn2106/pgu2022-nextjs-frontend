import { useState } from "react";
import Image from "next/image";

import BurgerBlack from "./BurgerBlack";
import Menu from "./Menu";

import styles from "../../../styles/Navbar.module.css";

const NavBarBlack = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "17vh",
          backgroundColor: "transparent",
          zIndex: 99,
        }}
      >
        <div className={styles.logoWrapper}>
          <Image
            src="/images/pgu-dark.png"
            alt="pgu-dark"
            height={60}
            width={108}
          />
        </div>

        <div className={styles.navText}>
          <span style={{ color: "black" }}>PRASMUL GEAR UP</span>
        </div>

        <div className="burger-wrapper">
          <BurgerBlack open={open} toggle={toggle} />
          <Menu open={open} toggle={toggle} />
        </div>
      </div>
    </>
  );
};

export default NavBarBlack;
