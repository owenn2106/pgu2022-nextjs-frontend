import { useState, useEffect } from "react";
import Image from "next/image";
import { DownCircleOutlined } from "@ant-design/icons";

import Burger from "./Burger";
import Menu from "./Menu";

import styles from "../../../styles/Navbar.module.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");

  let listener = null;
  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        setNavBackground("rgba(0, 0, 0, 0.75)");
      } else {
        setNavBackground("transparent");
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [navBackground]);

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
          backgroundColor: navBackground,
          transition: "all ease-out 0.2s",
          boxShadow:
            navBackground === "rgba(0, 0, 0, 0.75)"
              ? "0 2px 10px 0 rgba(0, 0, 0, 0.3)"
              : "none",
          zIndex: 99,
        }}
      >
        <div className={styles.logoWrapper}>
          {open ? (
            <Image src="/images/pgu-dark.png" height={60} width={108} />
          ) : (
            <Image src="/images/pgu-light.png" height={60} width={108} />
          )}
        </div>

        <div className={styles.navText}>
          <span>PRASMUL GEAR UP</span>
        </div>

        <div className="burger-wrapper">
          <Burger open={open} toggle={toggle} />
          <Menu open={open} toggle={toggle} />
        </div>
      </div>

      <div className={styles.scrollSign}>
        <span>SCROLL</span>
        <DownCircleOutlined />
      </div>
    </>
  );
};

export default NavBar;
