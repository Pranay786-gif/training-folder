import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
//import AuthApi from './AuthApi';


const Login = () => {
   //const Auth=React.useContext(AuthApi);
    let history=useHistory();
    const [user,setUser] = useState({
       username:"",
       password:""
      
     

    });
    const {username,password}=user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    const onSubmit =  (e)=>{
        e.preventDefault();
        
        if(user.username ===  'pranay' && user.password === '123' ){
            localStorage.setItem('login',JSON.stringify(user))
            history.push("/admin")

        
           // Auth.setAuth(true);
           
           
        } else{
            alert("wrong username or passwordd")
        }
       
        
    }

    return (
        <div className="login"> 
            <h1>login</h1>
            <form onSubmit={e => onSubmit(e)}>
             
                    <input type="text" className="form-control" placeholder="Enter your name" name="username" value={username} onChange={e=>onInputChange(e)}  /> <br />                   
                    <input type="password" className="form-control" placeholder="password" name="password" value={password} onChange={e=>onInputChange(e)} />  <br />
                    <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
      
    )
};                                    
export default Login;