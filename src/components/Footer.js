import React from "react";
import "./Footer.scss";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.svg";
import facebook from "../images/faceboook.svg";
import twitter from "../images/twitter3.svg";
import mail from "../images/email3.svg";


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <p>Have any comments or questions? Ready to book now?</p>
        <p>Click below and check out my socials</p>
        
      </div>
      <div className="footer-social-container">
        <a href="https://www.instagram.com/m_a_photographyutah/">
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.facebook.com/malbair">
          <img src={facebook} alt="" />
        </a>
        <a href="/">
          <img src={twitter} alt="" />
        </a>
        
      </div>
    </div>
  );
}

export default Footer;
