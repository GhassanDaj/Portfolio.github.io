import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import soon from "../../Assets/Projects/soon.png";
import emotion from "../../Assets/Projects/emotion.png";
import board from "../../Assets/Projects/board.png";
import chat from "../../Assets/Projects/chatapp.png";
import cal from "../../Assets/Projects/cals.png";
import suicide from "../../Assets/Projects/suicide.png";
import country from "../../Assets/Projects/country.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chatting App"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/GhassanDaj/Chat-App-using-React"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="BMR Calculator App"
              description="BMR Calculator Pro is a user-friendly mobile application designed to help individuals calculate their Basal Metabolic Rate (BMR). BMR is a crucial metric for determining daily calorie needs and is often used in nutrition and fitness planning. This app is a useful tool for anyone looking to manage their weight, plan their diet, or track their calorie intake accurately."
              ghLink="https://github.com/GhassanDaj/BMR-Calories-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="GeoGuesser+"
              description="GeoGuessr+ is an engaging and educational mobile application designed for Android using Android Studio. It's a location-based quiz game that challenges users to guess the country based on a randomly selected image from that country. The app utilizes geolocation services and a vast database of images to provide an immersive and entertaining gaming experience."
              ghLink="https://github.com/GhassanDaj/Guess-The-Country-Game-on-Android"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={board}
              isBlog={false}
              title="CheckerBoard Maker"
              description="The Online Checkerboard Maker is a versatile and user-friendly web-based tool designed to effortlessly create checkerboard patterns for a variety of purposes. Whether you're a game designer, a graphic artist, or simply someone looking to add a touch of classic style to your projects, this intuitive tool is your go-to solution."
              ghLink="https://github.com/GhassanDaj/CheckerBoard-Maker"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soon}
              isBlog={false}
              title="COMING SOON"
              description=""
              ghLink="https://github.com/GhassanDaj"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soon}
              isBlog={false}
              title="COMING SOON"
              description=""
              ghLink="https://github.com/GhassanDaj"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
