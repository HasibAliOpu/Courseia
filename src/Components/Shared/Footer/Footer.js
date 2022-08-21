import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faMailBulk,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer
        id="contact"
        className="footer bg-slate-800 text-white py-40 px-20 font-sans font-semibold 
      text-lg"
      >
        <div>
          <h1 className="text-2xl lg:text-5xl font-mono text-green-400">
            Courseia
          </h1>
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="text-xl pr-2" />
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
      <footer
        className="bg-slate-800 text-white font-sans italic text-center
      text-lg"
      >
        <hr className="mx-12" />
        <p className="py-5">
          <FontAwesomeIcon icon={faCopyright} /> alright reserved by Courseia
        </p>
      </footer>
    </div>
  );
};

export default Footer;
