import Link from "next/link";

import { useHover } from "../../hooks";

import styles from "../../../styles/Navbar.module.css";

const MenuRight = ({ toggle }) => {
  const [link1Hovering, link1HoverProps] = useHover();
  const [link2Hovering, link2HoverProps] = useHover();
  const [link3Hovering, link3HoverProps] = useHover();
  const [link4Hovering, link4HoverProps] = useHover();

  return (
    <div className={styles.menuRight}>
      <div className={styles.navItem}>
        <Link href="/">
          <a className={styles.navLinks} onClick={toggle} {...link1HoverProps}>
            Home
          </a>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href="/community/">
          <a className={styles.navLinks} onClick={toggle} {...link2HoverProps}>
            Community Life
          </a>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href="/leaderboard/">
          <a className={styles.navLinks} onClick={toggle} {...link3HoverProps}>
            Leaderboard
          </a>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href="/announcements/">
          <a className={styles.navLinks} onClick={toggle} {...link4HoverProps}>
            Announcements
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MenuRight;
