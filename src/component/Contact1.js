import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import axios from 'axios';


class Contact extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      message: ''
    }
  }
  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    })

  }
  handleEmailChange = (event) => {

    this.setState({
      email: event.target.value
    })
  }
  handleMessageChange = (event) => {

    this.setState({
      message: event.target.value
    })
  }

  handleSubmit =  async event => {
    event.preventDefault();
    const data= this.state
    console.log(data.name)
  
     fetch('http://solaceinfotech.co.in/projects/pranay/api/v1/?action=contact&full_name=' + this.state.username+'&email='+this.state.email+'&message='+this.state.message+'', {
      method: 'GET', 
      
     
    })//.then(res=>res.json())
    
    //.then(data=>console.log(data))
    await axios.post("http://localhost:3003/informations",data);
    this.props.history.push("/inf");
   
  }
  render() {
    return (
      <div className="app">
        <Navbar />
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

        <form  onSubmit={this.handleSubmit}>
        <div className="form">
          <div>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.handleUserNameChange} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div>
          <label>Message</label>
          <textarea name="message"  value={this.state.message} onChange={this.handleMessageChange} rows="5" cols="30"></textarea> 
          <button type="submit" >submit</button>
        </div>
      
      
      
      
      
          
      
      
        </div>
      </form>
       
        


      </div>
    )



  }

}
export default Contact;