import React, {useState,useEffect} from "react";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';


const ViewContact=()=>{
    const [user,setUser] = useState({
        username:"",
        email:"",
        message:"",

 
     });
     const {id} = useParams();
     useEffect(()=>{
         loadUser();
     },[])
     const loadUser = async  ()=>{
        const result = await axios.get(`http://localhost:3003/informations/${id}`);
        setUser(result.data);
    }

    return(
        <div className="container py-4">
        <Link className="btn btn-primary" to= "/inf"> Back to home</Link>
        <h1 className="display-4"> User Id: {id}</h1>
        <hr/>
        <ul className="list-group w-50">
        <li className="list-group-item"> username:{user.username}</li>
        <li className="list-group-item"> email:{user.email}</li>
        <li className="list-group-item">message:{user.message}</li>
        </ul>
        
        </div>

    )
}
export default ViewContact;