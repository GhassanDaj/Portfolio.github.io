import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ghassan AL Dajani </span>
            from <span className="purple"> Beirut, Lebanon.</span>
            <br /> I am a third-year student completing my computer Science Degree at York Univeristy.
            <br />
            <br />
            Some of the things i like to do in my free-time
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> going out
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
