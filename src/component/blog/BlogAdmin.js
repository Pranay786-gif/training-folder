import React , {useState, useEffect} from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import {Link} from 'react-router-dom';
import renderHtml from 'react-render-html';
import  '../../Sidebar1.css';


const Blog=()=>{
    const[users,setUser]=useState([]);
    useEffect(()=>{
      loadUsers();
    },[]);
  
    const loadUsers = async ()=>{
      const result = await axios.get ("http://localhost:3004/posts");
      setUser(result.data.reverse()); 
    };
    const deletePost = async id =>{
      await axios.delete(`http://localhost:3004/posts/${id}`);
      loadUsers();
    }


    return(
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
        <hr  color="white"/>
        <Link to="/addpost" className="btn btn-outline-danger add">Create Post</Link>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
         {
           users.map((user,index)=>(
             <div>
             <tr>
             <th scopr="row">{index+1}</th> 
             <td><h2>{user.title}</h2></td>
             <td>{renderHtml(user.body)}</td>
             <td>{user.date}</td>
            
             <td>
             <Link class="btn btn-primary mr-2" to={`blog/post/${user.id}`} >View</Link>
             <Link class="btn btn-outline-primary" to={`editpost/${user.id}`} >Edit</Link>
             <Link class="btn btn-danger" onClick={()=>deletePost(user.id)}>Deleat</Link>
             </td>
             </tr>
             </div>
      
           ))
         }
         
        </tbody>
      </table>
      
        
        </div>
      


    )
};
export default Blog;