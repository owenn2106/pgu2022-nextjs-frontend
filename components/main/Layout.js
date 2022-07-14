import NavBar from "./Nav/NavBar";
import { useRouter } from "next/router";
import NavBarBlack from "./Nav/NavBarBlack";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="content">
      {router.pathname !== "/" ? <NavBarBlack /> : <NavBar />}
      {children}
    </div>
  );
};

export default Layout;
