import React, {useState} from "react";
import Navbar from '../Navbar';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import{useHistory} from 'react-router-dom';
import Footer from '../Footer';
const Contact = () => {
  let history=useHistory();
  const handleChange=()=>{
    if(localStorage.getItem('login2')){

      history.push('/contact')
    } else{
      history.push('/login')
    }
 

  }
    const [user,setUser] = useState({
       username:"",
       email:"",
       message:"",
     

    });
    const {username,email,message}=user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/informations",user);
        alert("Your Information submitted successfully");
        
        
     fetch('http://solaceinfotech.co.in/projects/pranay/api/v1/?action=contact&full_name=' + user.username+'&email='+user.email+'&message='+user.message+'', {
        method: 'GET', 
        
       
      });
      

    }

    return (
        <div> 
            <Navbar />
            <button onClick={()=>handleChange()} className="btn btn-outline-danger loginl">Login</button>
            
            <div >
            <Container>
              <Row>
                <Col xs={12} md={8} className="contact">
                  Email: pranaydwivedi231@gmail.com
            </Col>
                <Col xs={6} md={4} className="contact">
                  Tel No: 6392140752
            </Col>
              </Row>
            </Container>
          </div>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <h1>Contact Form</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div class="mb-3 " >
                    <input type="text" className="form-control" placeholder="Enter your name" name="username" value={username} onChange={e=>onInputChange(e)}  />                    
                   <a href="mailto:pranaydwivedi231@gmail.com"><input type="text" className="form-control" placeholder="email" name="email" value={email} onChange={e=>onInputChange(e)} />  </a> 
                    <textarea type="text" className="form-control" placeholder="message" name="message" value={message} rows="5" onChange={e=>onInputChange(e)} /> 
                </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <Footer />
        </div>
      
    )
};                                    
export default Contact;