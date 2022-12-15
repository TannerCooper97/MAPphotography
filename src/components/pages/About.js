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
        <div className="greetings-content-about">
          <h2> My Name is Michelle Albair</h2>
          <p className="subtitle-about">So nice to meet you!</p>
          <div>
            <p className="paragraph-about">
              While being the owner of an adorable poodle, passionately detailed
              photographer and your biggest cheerleader you will come to know, I
              have quite the eventful life. I currently work in the ER and tend
              to patients in the hospital whilst I try and figure out my budget
              to travel the world. However, my days are usually spent either
              adventuring out with my quirky family, pampering my toy poodle
              Berkley, or out editing photos with a glass of wine on the porch.
            </p>
            <p className="paragraph-about">
              I am completely infatuated with each magical story behind each
              shot. Capturing the extraordinary feelings through photography is
              my superpower, and I would love to share it with you. Every
              session I photograph, whether it be a wedding, an engagement, or a
              maternity session, means the absolute world to me. I become a part
              of those moments, and envelope those feelings of the bride, the
              mother-to-be or the newly engaged couple.
            </p>
            <p className="paragraph-about">
              Photography to me is not just photos collecting dust on the shelf,
              they are windows to your most cherished memories, and I want to
              make them unforgettable. Just like the maid of honor, preserving
              your most important moments is my responsibility, and I will make
              sure they last forever. I eat, breath and sleep photography. I am
              always practicing, learning, and aiming to improve my craft so I
              can deliver photos worthy of those incredible moments.
            </p>
          </div>
        </div>
        <div className="about-photo"></div>
      </div>
      <div className="about-banner">
        <h4>
          Your neighborhood travel-obsessed mog mom is always planning her next
          trip
        </h4>
      </div>

      <div className="travel-section">
        <div className="travel-item-container-1">
          <h5>Italy</h5>
          <div className="travel-photo-1"></div>
        </div>
        <div className="travel-item-container-2">
          <h5>Greece</h5>
          <div className="travel-photo-2"></div>
        </div>
        <div className="travel-item-container-3">
          <h5>Powell</h5>
          <div className="travel-photo-3"></div>
        </div>
      </div>

      <div className="about-banner-2">
        <h4>
          As your photographer, it is my promise to you that I will be by your
          side, ready to capture every moment of joy, excitement, and love.
        </h4>
      </div>

      <div className="about-container-set1">
        <div className="boquet-image"></div>
        <div className="brides-image"></div>
      </div>

      <div className="about-banner">
        <h4>
            I am here to make you feel priceless.
        </h4>
      </div>

      <div className="about-container-set2">
        <div className="maternity-set2"></div>
        <div className="red-bride-set2"></div>
      </div>

      <div className="about-banner-3">
        <h4>
          Years from now, you will be able to look at these photos and be pulled right back into that moment which is a gift I am always so happy to offer. 
        </h4>
      </div>

      <div className="about-container-set3">
        <div className="about-set3-container">
        <div className="embrace-image"></div>
        <div className="child-set3"></div>
        </div>
        <div className="wedding-couple-set3"></div>
      </div>

      <div className="about-banner">
        <h4>
        Beacause your big day matters to me as much as it matters to you. 
        </h4>
      </div>

      <div className="about-container-set4">
        <div className="wedding-couple-set4"></div>
      </div>

      <Footer />
      
    </div>
  );
}

export default About;
