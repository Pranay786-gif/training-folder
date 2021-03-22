import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

const  ForgetPass=()=>{
    let history = useHistory();
  const [user, setUser] = useState({
    username: "",
  });
  
  const { username} = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (user.username === "pranay") {
      localStorage.setItem("username", JSON.stringify(user.username));
      history.push("/forgetpass1");

      
    } else {
      alert("galat")
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