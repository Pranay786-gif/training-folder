import React, {useState} from "react";
import Navbar from '../Navbar';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddPost = () => {
    let history = useHistory();
    const [user,setUser] = useState({
     title:"",
     body:"",
     date:""
    });
    const {title,body,date}=user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3004/posts",user);
        history.push("/blog");
        

    }

    return (
        <div> 
            <Navbar />
            <h1>Create Post</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="title" name="title" value={title} onChange={e=>onInputChange(e)}  />                    
                    <textarea type="message" className="form-control"  placeholder="body" name="body" value={body} onChange={e=>onInputChange(e) } rows="5" cols="70"  />
                    <input type="date" className="form-control" placeholder="date" name="date" value={date} onChange={e=>onInputChange(e)}  /> 
                        
                </div>
                    <button type="submit" class="btn btn-primary">Add Post</button>
            </form>
        </div>
      
    )
};                                    
export default AddPost; 



