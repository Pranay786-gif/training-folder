import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import renderHtml from 'react-render-html';

const Blog = () => {
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
      <h1> Posts</h1>
      <hr color="white" />
      <Link to="/addpost" className="btn btn-outline-danger add">Create Post</Link>

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
    </div>
  );
};
export default Blog;
