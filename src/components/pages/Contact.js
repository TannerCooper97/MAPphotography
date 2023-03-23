import React from "react";
import "../../App.scss";
import "../pages/Contact.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Contact</h1>
      </div>

      <div className="questions-banner">
        <h3>Looking to work together? Or have more questions?</h3>
        <p>
          If you have any questions concerns or just want to get a quote you are
          welcome to send me a message and can get back to you within 24 to 48
          buisness hours. I can’t wait to make your dreams come true!
        </p>
      </div>

      <div className="postcard">
        <div className="postcard-container">
          <p className="postcard-title">Post Card</p>
          <form action="" className="postcard-form">

            <div className="postcard-text-area">
            <textarea
            className="postcard-message"
              name="postcard-message"
              id="postcard-message"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            </div>
            
            <div className="postcard-input-fields">
              <input
                className="postcard-name-input input-spacing"
                type="text"
                name="postcard-name"
                id="postcard-name"
                placeholder="First and Last Name"
              />
              <input
                className="postcard-email-input input-spacing"
                id="postcard-email"
                name="postcard-email"
                type="email"
                placeholder="Email"
              />
              <input
                type="phone"
                className="postcard-phone-input input-spacing"
                id="postcard-phone"
                name="postcard-phone"
                placeholder="Phone Number"
              />
              <input
                type="number"
                className="postcard-budget-input input-spacing"
                id="postcard-budget"
                name="postcard-budget"
                placeholder="Estimated Budget"
              />
              <select className="postcard-select-input input-spacing" id="postcard-services" name="postcard-services">
                <option value="engagements">Couples & Engagements</option>
                <option value="weddings">Weddings</option>
                <option value="maternity">Maternity</option>
                <option value="bridals">Bridals</option>
                <option value="elopements">Elopements</option>
                <option value="destination">Destination Bridals</option>
                <option value="other">Other</option>
                
                </select>
                <Link to="/" className="btn-mobile greet-Btn">
              <Button
                className="btns"
                buttonStyle="btn--outline-black"
                buttonSize="btn--large"
              >
                Send
              </Button>
            </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
