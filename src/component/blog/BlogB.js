import React, { useState, useEffect } from "react";
import Navbar from '../navbar/Navbar'
import axios from "axios";
import { Link } from "react-router-dom";
import renderHtml from 'react-render-html';
import Footer from "../Footer";
import '../../Sidebar1.css';

const BlogB = () => {
  

  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/posts");
    setUser(result.data.reverse());
  };

  return (
    <div>
      <Navbar />
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
      <h1> Posts</h1>
      <hr color="white" />
      {users.map((user, index) => (
        <div className="table">
          <div>
            <p>{user.date}</p>
            <h2>{user.title}</h2>
          </div><br />
          <span className="claimedRight text"  >{renderHtml(user.body)}</span>
          <Link class="btn btn-primary mr-2" to={`blog/post/${user.id}`}>
            Read Full Post
          </Link>
        
          <hr color="white" />
        </div>
      ))}
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default BlogB;
