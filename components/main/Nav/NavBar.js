import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { DownCircleOutlined } from "@ant-design/icons";

import Burger from "./Burger";
import Menu from "./Menu";

import styles from "../../../styles/Navbar.module.css";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");

  const router = useRouter();

  let listener = null;
  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        setNavBackground("rgba(0, 0, 0, 0.9)");
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
          height: "12vh",
          backgroundColor: navBackground,
          transition: "all ease-out 0.2s",
          boxShadow:
            navBackground === "rgba(0, 0, 0, 0.9)"
              ? "0 2px 10px 0 rgba(0, 0, 0, 0.3)"
              : "none",
          zIndex: 99,
        }}
      >
        <div className={styles.logoWrapper}>
          <Link href="/">
            <a>
              {open ? (
                <Image
                  src="/images/pgu-dark.png"
                  alt="Prasmul Gear Up 2022"
                  height={40}
                  width={72}
                />
              ) : (
                <Image
                  src="/images/pgu-light.png"
                  alt="Prasmul Gear Up 2022"
                  height={40}
                  width={72}
                />
              )}
            </a>
          </Link>
        </div>

        <div className={styles.navText}>
          <span>PRASMUL GEAR UP</span>
        </div>

        <div className="burger-wrapper">
          <Burger open={open} toggle={toggle} />
          <Menu open={open} toggle={toggle} />
        </div>
      </div>

      {router.pathname !== "/" ? null : (
        <div className={styles.scrollSign}>
          <span>SCROLL</span>
          <DownCircleOutlined />
        </div>
      )}
    </>
  );
};

export default NavBar;
