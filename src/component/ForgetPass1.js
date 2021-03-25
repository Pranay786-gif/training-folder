import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const ForgetPass1 = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    username:"",
    password: ""
  });

  const {username, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loadUser = async  ()=>{
     await axios.delete("http://localhost:3005/users/1");
     await axios.post("http://localhost:3005/users",user);
   
}
  const onSubmit = (e) => {
    // e.preventDefault();

    /*if (user.password) {
      localStorage.setItem("password", JSON.stringify(user.password));
      history.push("/login");
    }*/
    /*axios.delete("http://localhost:3005/users/1")
    axios.post("http://localhost:3005/users",user)
    history.push("/login");*/
    loadUser();
    history.push("/");

  };
  return (
    <div className="logo">
      <div className="login">
        <h1>forget password</h1>

        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your new username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
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
  );
};
export default ForgetPass1;
