import { useState } from "react";
import Image from "next/image";
import { DownCircleOutlined } from "@ant-design/icons";

import Burger from "./Burger";
import Menu from "./Menu";

import styles from "../../../styles/Navbar.module.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Image src="/images/logo-pgu.png" height={60} width={108} />
      </div>

      <div className={styles.navText}>
        <span>PRASMUL GEAR UP</span>
      </div>

      <div className="burger-wrapper">
        <Burger open={open} toggle={toggle} />
        <Menu open={open} toggle={toggle} />
      </div>

      <div className={styles.scrollSign}>
        <span>SCROLL</span>
        <DownCircleOutlined />
      </div>
    </div>
  );
};

export default NavBar;
