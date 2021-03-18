import "./Navbar.css";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar_left">
        <a href="./blog">Preview</a>
      </div>
      <div className="navbar_right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
