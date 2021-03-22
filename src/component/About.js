import React  from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from './Navbar';
import {useHistory} from 'react-router-dom';
import Footer from './Footer';
const About=()=>{
  let history=useHistory();
  const handleChange=()=>{
    if(localStorage.getItem('login2')){

      history.push('/about')
    } else{
      history.push('/login')
    }
 

  }



    return (
        <div className="app">
        <Navbar />
        <button onClick={()=>handleChange()} className="btn btn-outline-danger loginl">Login</button>
            
            <ReactBootStrap.Card>
  <ReactBootStrap.Card.Header>About Us</ReactBootStrap.Card.Header>
  <ReactBootStrap.Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?{' '}
      </p>
    
    </blockquote>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
            <Footer />
        </div>
    )

}
export default About;