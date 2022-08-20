import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="footer bg-slate-800 text-white py-40 px-20 font-sans font-semibold 
      text-lg"
    >
      <div>
        <FontAwesomeIcon icon={faLocationDot} className="text-4xl" />
        <p>
          Paradise Road 70, Office 99, Pacific
          <br />
          Bay, New York City 10010
        </p>
      </div>
      <div>
        <span className="footer-title uppercase">Send message</span>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faPhone} /> +123 456 789
        </a>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faMailBulk} /> mail.@courseia.io
        </a>
      </div>
      <div>
        <span className="footer-title uppercase">pages</span>
        <a href="#" className="link link-hover">
          Home
        </a>
        <a href="#courses" className="link link-hover">
          Courses
        </a>
        <a href="#about" className="link link-hover">
          About us
        </a>
        <a href="#contact" className="link link-hover">
          Contact us
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
