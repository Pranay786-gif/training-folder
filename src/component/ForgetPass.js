import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

const  ForgetPass=()=>{
    let history = useHistory();
  const [user, setUser] = useState({
    username: "",
  });
  const [value, setValue] = useState({
    username: "",
    password:""
  });
  
  
  const { username} = user;
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
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (user.username === (value.username)) {
      // localStorage.setItem("username", JSON.stringify(user.username));
      history.push("/forgetpass1");

      
    } else {
      alert("Wrong Username!")
    }
  };
    return(
        <div className="logo">
          <div className="login">
            <h1>forget password</h1>
           
            <form onSubmit={(e)=>onSubmit(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <button type="submit" class="btn btn-primary">
                submit
              </button>
            </form>
          </div>
        </div>
    )
}
export default ForgetPass;