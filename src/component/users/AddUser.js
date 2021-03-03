import React, {useState} from "react";
import Navbar from '../Navbar';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
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
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3002/users",user);
        history.push("/home");
        console.log(user.name)

    }

    return (
        <div> 
            <Navbar />
            <h1>add user</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="Enter your name" name="name" value={name} onChange={e=>onInputChange(e)}  />                    
                    <input type="text" className="form-control"  placeholder="Enter your username" name="username" value={username} onChange={e=>onInputChange(e)}  />
                    <input type="text" className="form-control" placeholder="email" name="email" value={email} onChange={e=>onInputChange(e)} />  
                    <input type="text" className="form-control" placeholder="phone" name="phone" value={phone} onChange={e=>onInputChange(e)} /> 
                    <input type="text" className="form-control" placeholder="website" name="website" value={website} onChange={e=>onInputChange(e)} />                   
                        
                </div>
                    <button type="submit" class="btn btn-primary">Add User</button>
            </form>
        </div>
      
    )
};                                    
export default AddUser;