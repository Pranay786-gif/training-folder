import React, {useState,useEffect} from "react";
import Navbar from '../Navbar';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user,setUser] = useState({
       name:"",
       username:"",
       email:"",
       phone:"",
       website:"",

    });
    const {name,username,email,phone,website}=user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    useEffect(()=>{
        loadUser();
    }, []);
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`,user);
        history.push("/home");

    };
    const loadUser = async  ()=>{
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    }

    return (
        <div> 
            <Navbar />
            <h1>Edit user</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="Enter your name" name="name" value={name} onChange={e=>onInputChange(e)}  />                    
                    <input type="text" className="form-control"  placeholder="Enter your username" name="username" value={username} onChange={e=>onInputChange(e)}  />
                    <input type="text" className="form-control" placeholder="email" name="email" value={email} onChange={e=>onInputChange(e)} />  
                    <input type="text" className="form-control" placeholder="phone" name="phone" value={phone} onChange={e=>onInputChange(e)} /> 
                    <input type="text" className="form-control" placeholder="website" name="website" value={website} onChange={e=>onInputChange(e)} />                   
                        
                </div>
                    <button type="submit" class="btn btn-primary">Edit User</button>
            </form>
        </div>
      
    )
};                                    
export default EditUser;