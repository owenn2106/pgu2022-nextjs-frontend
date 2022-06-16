import NavBar from "./Nav/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
