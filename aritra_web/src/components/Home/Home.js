import React from "react";
import "./Home.scss";
import Fade from "react-reveal/Fade";

const Home = () => {
  const name = "Aritra Roy";
  const resumeUrl =
    "https://drive.google.com/file/d/1Js1YH2eDX-QRlMyBNUBiraix8iuVCBMV/view";

  return (
    <>
      <Fade cascade delay={600}>
        <section className="title-section">
          <p className="introduction">Hello! Hola! My name is</p>
          <h1>{name}.</h1>
          <h1 className="sub-header-title">Building things for the web.</h1>
          <p className="description-title">
            I'm a{" "}
            <span>
              <b>Web-Application Developer</b>
            </span>{" "}
            and UI design enthusiast based in West Bengal, India. My areas of expertise
            lie in JavaScript ES6+, UX/UI Design, and Test-Driven Development.
          </p>
          <div>
            <Fade bottom cascade delay={800}>
              <a href="#Contact" className="button-link">
                <button className="contact-button">Get In Touch</button>
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                <button className="contact-button">Download CV</button>
              </a>
            </Fade>
          </div>
        </section>
      </Fade>
      <div className="orb"></div>
    </>
  );
};

export default Home;
