import styled from "styled-components";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

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
    </StyledMenu>
  );
};

export default Menu;
