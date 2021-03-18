import { useState} from 'react';
import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';
import './AdminPanel.css';
import { useHistory, withRouter } from "react-router-dom";





const AdminPanel=()=>{
    let history=useHistory();
    const logout = () => {
        localStorage.removeItem('login');
        history.push("/");
      };
      const count=parseInt(localStorage.getItem('count'))
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const openSidebar=()=>{
        setSidebarOpen(true);
    }
    const closeSidebar=()=>{
        setSidebarOpen(false);
    };
    return(
        <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <button className="log" onClick={() => logout()}>
        Log Out
      </button>
      <div>
      <h1>React Dashboard </h1>
      <h1>{count}</h1>
      </div>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>


    );
};
export default withRouter(AdminPanel);
