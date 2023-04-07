import React from "react";
import "../../App.scss";
import "../pages/About.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function About() {
  return (
    <div>
      <div className="greetings-about">
        <div className="greetings-about-container">
          <h2 className="subtitle-about">So nice to meet you!</h2>
          <p className="paragraph-about">
            While being the owner of an adorable poodle, passionately detailed
            photographer and your biggest cheerleader you will come to know, I
            have quite the eventful life. I currently work in the ER and tend to
            patients in the hospital while I try and figure out my budget to
            travel the world. However, my days are usually spent either
            adventuring out with my quirky family, pampering my toy poodle
            Berkley, or out editing photos with a glass of wine on the porch.
          </p>
        </div>
        <div className="about-photo"></div>
      </div>

      <div className="about-gallery-banner">
        <p>
          Your neighborhood travel-obsessed dog mom is always planning her next
          trip
        </p>
      </div>

     
        <div className="travel-section-1">
          <div className="travel-photo-1"></div>

          <div className="travel-photo-2"></div>

          <div className="travel-photo-3"></div>

          <div className="travel-photo-4"></div>
        </div>
        <div className="travel-section-2">
          <div className="travel-photo-5"></div>

          <div className="travel-photo-6"></div>

          <div className="travel-photo-7"></div>

          <div className="travel-photo-8"></div>
        </div>
        
     

      <Footer />
    </div>
  );
}

export default About;
