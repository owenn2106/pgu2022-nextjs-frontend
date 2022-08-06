import styled from "styled-components";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { motion } from "framer-motion";

import styles from "../../../styles/Navbar.module.css";

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 300ms ease;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: 9;
`;

const Menu = ({ open, toggle }) => {
  return (
    <StyledMenu className={styles.menuBg} open={open}>
      <div className={styles.menuWrapper}>
        <MenuLeft />
        <MenuRight toggle={toggle} />
      </div>
      <div className={styles.copyright}>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span>&#169;</span>2022 Prasmul Gear Up
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          All Rights Reserved
        </motion.p>
      </div>
    </StyledMenu>
  );
};

export default Menu;
