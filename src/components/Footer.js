import React from "react";
import "./Footer.scss";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import instagram from "../images/instagram2.svg";
import facebook from "../images/facebook1.svg";
import twitter from "../images/twitter1.svg";
import mail from "../images/mail1.svg";
import mapRed from "../images/MAphotographyRed.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <h3> Not sure where to start?</h3>
        <p>Have any comments or questions? Ready to book now?</p>
        <p>Click below and lets get started.</p>
        <div className="hero-btns footer-btn">
          <Link to="/contact" className="btns">
            <Button
              className="btns"
              buttonStyle="btn--outline-black"
              buttonSize="btn--large"
            >
              Message Me
            </Button>
          </Link>
        </div>
      </div>
      <div className="footer-social-container">
        <a href="https://www.instagram.com/m_a_photographyutah/">
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.facebook.com/malbair">
          <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/MAPphotoUT">
          <img src={twitter} alt="" />
        </a>
        <Link to="/contact">
          <img src={mail} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
