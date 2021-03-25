import React, { useState,useEffect} from "react";
import { useHistory,Link } from "react-router-dom";
//import AuthApi from './AuthApi';
import Footer from "./Footer";
import axios from 'axios';
const Login = () => {
  //const Auth=React.useContext(AuthApi);
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const[error,setError]=useState('')
  const [value,setValue] = useState({
    name:"",
    password:"",
 });
  const[show,setShow]=useState(false)
  const { username, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    loadUser()
  },[])
  const loadUser = async  ()=>{
    const result = await axios.get("http://localhost:3005/users/1");
   setValue(result.data);
}
console.log(value.password)

  //console.log(localStorage.getItem('login1'));
  //console.log(localStorage.getItem('login'))
 // console.log(user.username)
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (user.username === (value.username)/*JSON.parse(localStorage.getItem("username"))*/ && user.password === (value.password)/*JSON.parse(localStorage.getItem("password"))*/ ) {
      localStorage.setItem("login2", JSON.stringify(value));
      history.push("/admin");

      
    } else {
      setError("Wrong username or password!")
    }
  };

  return (
    <div className="logo">
    <Link className="btn btn-primary my-4" to= "/"> Back to posts</Link>
      <div className="login">
        <h1>login</h1>
        <p style={{color:'red'}}>{error}</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          /> 
          <br />
          <input
            type={show ? 'text' : 'password'}
            className="form-control"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          /><i className="fa fa-eye password-icon" onClick={()=>setShow(!show)}></i>
          <br />
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <Link to="/forgetpass" className="forget">Forgot Password</Link>
         
        </form>
      </div>
      <br></br>
      <br></br>
 <Footer />
</div>
  );
};
export default Login;
