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
      class="footer bg-slate-800 text-white py-40 px-20 font-sans font-semibold 
      text-lg mt-20"
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
        <span class="footer-title uppercase">Send message</span>
        <a class="link link-hover">
          <FontAwesomeIcon icon={faPhone} /> +123 456 789
        </a>
        <a class="link link-hover">
          <FontAwesomeIcon icon={faMailBulk} /> mail.@courseia.io
        </a>
      </div>
      <div>
        <span class="footer-title uppercase">pages</span>
        <a href="#" class="link link-hover">
          Home
        </a>
        <a href="#courses" class="link link-hover">
          Courses
        </a>
        <a href="#about" class="link link-hover">
          About us
        </a>
        <a href="#contact" class="link link-hover">
          Contact us
        </a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
