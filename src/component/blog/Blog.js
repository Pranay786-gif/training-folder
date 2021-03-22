import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Link ,useHistory} from "react-router-dom";
import renderHtml from 'react-render-html';
import Footer from "../Footer";

const Blog = () => {
  let history=useHistory();
  const handleChange=()=>{
    if(localStorage.getItem('login2')){

      history.push('/')
    } else{
      history.push('/login')
    }
 

  }

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
      <button onClick={()=>handleChange()} className="btn btn-outline-danger loginl">Login</button>
      <h1> Posts</h1>
      <hr color="white" />
      <Link to="/addpost" className="btn btn-outline-primary add">Create Post</Link>

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
export default Blog;
