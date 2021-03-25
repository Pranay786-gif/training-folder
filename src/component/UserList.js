import React, { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import axios from "axios";
import Footer from "./Footer";
import { Link} from "react-router-dom";
import '../../src/Sidebar1.css';



const UserList = () => {
 
  
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };

  return (
    <div>
        <Navbar />
      <Link to="/adduser" className="btn btn-outline-light add">
        Add User
      </Link>
      <input type="checkbox" id="check" />
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
      <div class="sidebar">
      <header>My App</header>
    <ul>
  <li><a href="/admin"><i class="fas fa-qrcode"></i>Dashboard</a></li>
  <li><a href="/blogb"><i class="fas fa-home"></i>Home</a></li>
  <li><a href="/userlist"><i class="fas fa-user"></i>users</a></li>
  <li><a href="/bloga"><i class="fas fa-image"></i>blog</a></li>
  <li><a href="/inf"><i class="far fa-envelope"></i>Contact</a></li>
  </ul>
  </div>
    
      <div className="app">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scopr="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`viewuser/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary"
                    to={`edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Deleat
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
      <Footer />
     
    </div>
  );
};
export default UserList;
