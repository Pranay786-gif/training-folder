import React , {useState, useEffect} from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import {Link} from 'react-router-dom';
import renderHtml from 'react-render-html';


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