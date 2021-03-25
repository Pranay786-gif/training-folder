import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Card } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const handleChange = () => {
    if (localStorage.getItem("login2")) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <button
        onClick={() => handleChange()}
        className="btn btn-outline-danger loginl"
      >
        Login
      </button>

      <div className="app">
        <ReactBootStrap.Carousel>
          <ReactBootStrap.Carousel.Item>
            <img className="d-block w-50" src="img 2.jpg" alt="First slide" />
            <ReactBootStrap.Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </ReactBootStrap.Carousel.Caption>
          </ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Carousel.Item>
            <img
              className="d-block w-50 img"
              src="img 3.jpg"
              alt="Second slide"
            />

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
        <br></br>
        <h2>Client Portfolio</h2>
        <div className="container">
          <div className="carp">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Seimens Pvt Ltd</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  -Chief Executive
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="carp">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>AGP Private Limited</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  -Senior Manager
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.t is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Appollo Pharma Limited</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  -Director
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Contrary to popular belief,
                  Lore Latin literature from 45 BC, making it over 2000
                  years old. Richard Mm Ipsum is not simply random text. It has roots in a piece
                  of classicalcClintock.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};
export default Home;
