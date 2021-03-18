import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };

  return (
    <div>
        <Navbar />
      <Link to="/adduser" className="btn btn-outline-light add">
        Add User
      </Link>
    
      <div className="app">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scopr="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`viewuser/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary"
                    to={`edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Deleat
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <ReactBootStrap.Carousel>
          <ReactBootStrap.Carousel.Item>
            <img className="d-block w-50" src="img 2.jpg" alt="First slide" />
            <ReactBootStrap.Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </ReactBootStrap.Carousel.Caption>
          </ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Carousel.Item>
            <img className="d-block w-50" src="img 3.jpg" alt="Second slide" />

            <ReactBootStrap.Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </ReactBootStrap.Carousel.Caption>
          </ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Carousel.Item>
            <img className="d-block w-50 " src="img 4.jpg" alt="Third slide" />

            <ReactBootStrap.Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </ReactBootStrap.Carousel.Caption>
          </ReactBootStrap.Carousel.Item>
        </ReactBootStrap.Carousel>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="list">
          <ReactBootStrap.Container>
            <h3>Products</h3>
            <ReactBootStrap.Row>
              <ReactBootStrap.Col height="250px">Soap</ReactBootStrap.Col>
              <ReactBootStrap.Col>Milk</ReactBootStrap.Col>
              <ReactBootStrap.Col>Butter</ReactBootStrap.Col>
            </ReactBootStrap.Row>
          </ReactBootStrap.Container>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Client Portfolio</h2>
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>client</th>
              <th>industry</th>
              <th>type of engagement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mranay pvt ltd</td>
              <td>Aanufacturing</td>
              <td>Annual Audit</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pranay pvt ltd</td>
              <td>service</td>
              <td>Half Year Review</td>
            </tr>
            <tr>
              <td>3</td>
              <td> AGP ltd</td>
              <td> Service </td>
              <td>One Month Audit</td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
        <footer className="blockquote-footer">
          <h1>
            {" "}
            Someone famous in <cite title="Source Title">
              Source Title
            </cite>{" "}
          </h1>
        </footer>
      </div>
    </div>
  );
};
export default Home;
