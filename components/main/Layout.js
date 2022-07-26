import NavBar from "./Nav/NavBar";
import { useRouter } from "next/router";
import NavBarBlack from "./Nav/NavBarBlack";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
  }, []);

  return (
    <div className="content">
      {router.pathname === "/" ? (
        <NavBar />
      ) : router.pathname === "/leaderboard" ? (
        <NavBar />
      ) : router.pathname === "/community" ? (
        <NavBar />
      ) : (
        <NavBarBlack />
      )}
      {children}
    </div>
  );
};

export default Layout;
