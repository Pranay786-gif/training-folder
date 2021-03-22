import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

const  ForgetPass1=()=>{
    let history = useHistory();
  const [user, setUser] = useState({
    password: "",
  });
  
  const { password} = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (user.password) {
      localStorage.setItem("password", JSON.stringify(user.password));
      history.push("/login");

      
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
                placeholder="Enter your new password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <button type="submit" class="btn btn-primary">
                Reset Password
              </button>
            </form>
          </div>
        </div>
    )
}
export default ForgetPass1;