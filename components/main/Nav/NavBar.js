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

  const router = useRouter();

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
          background: "transparent",
          transition: "all ease-out 0.2s",
          zIndex: 99,
        }}
      >
        <div className={styles.logoWrapper}>
          <Link href="/">
            <a>
              {open ? (
                <Image
                  src="/images/pgu-dark.webp"
                  alt="Prasmul Gear Up 2022"
                  height={40}
                  width={72}
                />
              ) : (
                <Image
                  src="/images/pgu-light.webp"
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
