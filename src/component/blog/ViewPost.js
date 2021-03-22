import React, {useState,useEffect} from "react";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import renderHtml from 'react-render-html';


const ViewPost=()=>{
    const [user,setUser] = useState({
        title:"",
        body:"",
        date:"",
        viewcount:""
     });
     
     const {id} = useParams();
     const [count,setCount]=useState(0);
     /*const incNum=()=>{
         setCount(count+1)
     }*
     
    /* useEffect(()=>{
        setCount(count+1)
    },[])*/
    
    //console.log(count)
  
     //const viewcount=localStorage.getItem('count')
     
     /*useEffect(()=>{
        let c=Number(localStorage.getItem('count')) +1
        setCount(c)
        localStorage.setItem('count',String(c))
    },[])*/
    
     useEffect(()=>{
         loadUser();

     },[])
     
     /*const IncNum=()=>{
       setCount(count+1);
    }*/
    //localStorage.setItem('count',count)
     const loadUser = async  ()=>{
        const result = await axios.get(`http://localhost:3004/posts/${id}`);
        //setUser(result.data);
        const view=result.data.viewcount
        console.log(view)
        
        //console.log(user.viewcount)
       const result1 = await axios.put(`http://localhost:3004/posts/${id}`,{
            title: (result.data.title),
            body: (result.data.body),
            date: (result.data.date),
            viewcount:view+1
        });
        setUser(result1.data)
        
        
    } ;    
    
     
    return(
        <div>
        <span> {(user.title) ==='' ?<ErrorPage /> :
        
        <div className="container py-4">
        <Link className="btn btn-primary" to= "/"> Back to home</Link>
        <h1 className="display-4"> Post: {id}</h1>
        <hr/>
        <ul className="list-group w-100">
        <li className="list-group-item"> Title:{user.title}</li>
        <li className="list-group-item"> Body:{renderHtml(user.body)}</li>
        <li className="list-group-item"> Date:{user.date}</li>
        <li className="list-group-item"> Total Visit:{user.viewcount}</li>
       
        </ul>
    <h1> {/*count*/} </h1>
        
        </div>

    
    }</span>
        
     
        
        </div>
      
     
    )
}
export default ViewPost;