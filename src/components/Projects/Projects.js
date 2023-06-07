import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import hotTopic from "../../Assets/Projects/hottopic.png";
import suicide from "../../Assets/Projects/suicide.png";
import bandit from "../../Assets/Projects/banditlaptop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotTopic}
              isBlog={false}
              title="HotTopic"
              description="Automation program that allowed users to instantly add-to-cart and checkout on website HotTopic.com. Script was built on Selenium and UI on Kivy"
              ghLink="https://github.com/TamkienLe/HotTopicBot"

            />
          </Col>

          <Col md={4} className="project-card">
            
            <ProjectCard
              imgPath={bandit}
              isBlog={false}
              title="Bandit."
              description="Amazon E-bay price matcher that helps users save money while shopping on Amazon. Built with React.js, Node.js, Selenium"
              ghLink="https://github.com/Luka-Macieszczak/hackathon"
            />
          </Col>
          {/* <Col md={4} className="project-card">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
