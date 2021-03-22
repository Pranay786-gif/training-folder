import {  useEffect,useState } from "react";
import Navbar from "./component/navbar/Navbar";
//import "./AdminPanel.css";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import './Sidebar1.css';

const AdminPanel = () => {
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("login2");
    history.push("/");
  };
  const lo = JSON.parse(localStorage.getItem("login2"));
  const[users,setUser]=useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/posts?_limit=2");
    setUser(result.data);
    
  };
  

  return (
    <div className="container">
    <Navbar />
    <input type="checkbox" id="check" />
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
    <header>My App</header>
  <ul>
<li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
<li><a href="/home"><i class="fas fa-home"></i>Home</a></li>
<li><a href="/bloga"><i class="fas fa-image"></i>blog</a></li>
<li><a href="/contact"><i class="far fa-envelope"></i>Contact</a></li>
</ul>
</div>
      <div id="logout">
      <button className="log" onClick={() => logout()}>
        Log Out
        <br />
        <i className="fa fa-user user">{lo.username} </i>
      </button>
      
      </div>
      <div className="adminpost">
        {users.map((user,index)=>(
          <div>
          <p>{user.title}:{user.viewcount}</p>
          
          </div>


        ))}
      </div>
    </div>
  );
};
export default withRouter(AdminPanel);
