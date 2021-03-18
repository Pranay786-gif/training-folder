import './Sidebar.css';

const Sidebar=({sidebarOpen,closeSidebar})=>{
    return(
        <div className={sidebarOpen ? "sidebar-responsive":""} id="sidebar">
        <div className="sidebar_title">
        <div className="sidebar__img">
        <h1>Pranay's Website</h1>
        </div>
        <i className=" fa fa-times"
        id="sidebarIcon"
        onClick={()=>closeSidebar()}>
        </i>
        </div>
        <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
        <i className="fa fa-home"></i>
        <a  href="./" > Dashboard</a>
        </div>
        <div className="sidebar__link">
        <i className="fa fa-home"></i>
        <a  href="/home" > Home</a>
        </div>
        <div className="sidebar__link">
        <i className="fa fa-building-o"></i>
        <a  href="/inf" > Contact Us</a>
        </div>
        <div className="sidebar__link">
        <i className="fa fa-home"></i>
        <a  href="/bloga" > blog</a>
        </div>
        <div className="sidebar__link active_menu_link">
        </div>
        
        </div>
        
        </div>
    )
};
export default Sidebar;