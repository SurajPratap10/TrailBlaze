import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">
            <h4>Terms Of Use</h4>
          </li>
          <li className="menuItem">
            <h4>Privacy-Policy</h4>
          </li>
          <li className="menuItem">
            <h4>About</h4>
          </li>
          <li className="menuItem">
            <h4>Blog</h4>
          </li>
          <li className="menuItem">
            <h4>FAQ</h4>
          </li>
        </ul>
        <div className="infoText">
          "Stay ahead of the curve in the entertainment world with
          TrailBlazer.Our platform offers a comprehensive collection of trailers
          for the hottest and most talked about films and television programs,
          all in one convenient location. From blockbusters to indie hits, and
          from hit TV dramas to hilarious comedies, you'll find everything you
          need to know about the latest and greatest in entertainment, all just
          a few taps away."
        </div>
        <h4>Find me here 👋</h4>
        <br></br>
        <br></br>
        <div className="socialIcons">
          <span className="icon">
            <a href="https://github.com/SurajPratap10">
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.linkedin.com/in/suraj-pratap-948a92225/">
              <FaLinkedin />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.instagram.com/aridoshikazu_1/">
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.facebook.com/profile.php?id=100075096226121">
              <FaFacebookF />
            </a>
          </span>
        </div>
      </ContentWrapper>
      <h4>Copyright © Suraj. Made with 💕 by Suraj Pratap </h4>
    </footer>
  );
};

export default Footer;
