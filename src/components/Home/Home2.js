import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a passion for creating applications that solve problems 👾
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Javascript and C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are&nbsp;
              <i>
                <b className="purple">Web Technologies and Automation </b> and
                also in areas relating to{" "}
                <b className="purple">
                  AI.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I like to 
              <b className ="purple"> research </b>  
              and
              <b className ="purple"> develop </b>
    
              new technologies to improve my
              <b className="purple"> techincal ability</b>
    
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TamkienLe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tamkien-le-a1346322a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
