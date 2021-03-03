import React , {useState, useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Inf=()=>{
    const[users,setUser]=useState([]);
    useEffect(()=>{
      loadUsers();
    },[]);
  
    const loadUsers = async ()=>{
      const result = await axios.get ("http://localhost:3003/informations");
      setUser(result.data.reverse()); 
    };

    const deleteUser = async id =>{
      await axios.delete(`http://localhost:3003/informations/${id}`);
      loadUsers();
    }

    return(
        <div>
        <Navbar />
      
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
         {
           users.map((user,index)=>(
             <tr>
             <th scopr="row">{index+1}</th> 
             <td>{user.username}</td>
             <td>{user.email}</td>
             <td>{user.message}</td>
            
             <td>
             <Link class="btn btn-primary mr-2" to={`viewcontact/${user.id}`}>View</Link>
             <Link class="btn btn-outline-primary" to={`editcontact/${user.id}`} >Edit</Link>
             <Link class="btn btn-danger" onClick={()=>deleteUser(user.id)} >Deleat</Link>
             
      
             </td>
             </tr>
            
      
           ))
         }
         
        </tbody>
      </table>
      
        
        </div>
      


    )
};
export default Inf;