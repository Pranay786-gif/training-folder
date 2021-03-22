import React, {useState,useEffect} from "react";
import Navbar from '../Navbar';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

const EditPost = () => {
    let history = useHistory();
    let {id}=useParams();
    const [user,setUser] = useState({
     title:"",
     body:"",
     date:""
    });
    const {title,body,date}=user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    useEffect(()=>{
        loadUser();
    }, []);
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3004/posts/${id}`,user);
        history.push("/");
        console.log(user.name)

    };
    const loadUser = async  ()=>{
        const result = await axios.get(`http://localhost:3004/posts/${id}`);
        setUser(result.data);
    }

   
    return (
        <div> 
            <Navbar />
            <h1>Edit Post</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="title" name="title" value={title} onChange={e=>onInputChange(e)}  />                    
                    <textarea type="message" className="form-control"  placeholder="body" name="body" value={body} onChange={e=>onInputChange(e)} rows="5" cols="70"  />
                    <input type="date" className="form-control" placeholder="date" name="date" value={date} onChange={e=>onInputChange(e)}  /> 
                        
                </div>
                    <button type="submit" class="btn btn-primary">Edit Post</button>
            </form>
        </div>
      
    )
};                                    
export default EditPost;