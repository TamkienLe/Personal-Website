import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";





function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! My name is  <span className="purple">Tamkien Le </span> and I'm
            from <span className="purple"> Ottawa, Canada </span>
            <br /> I am a 
            <b className="purple"> third year  </b>
            student pursuing a Bachelor's degree in Computer Science at <b className="purple"> Carleton University  </b>
            <br />
            Additionally, I am currently employed as an intern at RealIT
            <br />
            <br />
            Apart from programming, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight />Listening to Music 🎼
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging with friends 👥
            </li>
          </ul>
          

        </blockquote>
        
      </Card.Body>
    </Card>
  );


}

export default AboutCard;
