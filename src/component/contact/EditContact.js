import React, {useState,useEffect} from "react";
import Navbar from '../Navbar';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';


const EditContact = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user,setUser] = useState({
       username:"",
       email:"",
       message:"",
     

    });
    const {username,email,message}=user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    useEffect(()=>{
        loadUser();
    }, []);
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/informations/${id}`,user);
        history.push("/inf");
        

    };
    const loadUser = async  ()=>{
        const result = await axios.get(`http://localhost:3003/informations/${id}`);
        setUser(result.data);
    }

    return (
        <div> 
            <Navbar />
           
            <h1> EditContact Form</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="Enter your name" name="username" value={username} onChange={e=>onInputChange(e)}  />                    
                    <input type="text" className="form-control" placeholder="email" name="email" value={email} onChange={e=>onInputChange(e)} />  
                    <input type="text" className="form-control" placeholder="message" name="message" value={message} onChange={e=>onInputChange(e)} /> 
                  
                </div>
                    <button type="submit" class="btn btn-primary">Edit</button>
            </form>
        </div>
      
    )
};                                    
export default EditContact;