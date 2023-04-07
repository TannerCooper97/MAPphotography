import React from "react";
import "../../App.scss";
import HeroSection from "../HeroSection";
import "../pages/Home.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Masonry from "../masonry";
import homeImages from '../home-images.js';

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="greetings-section">
        <div className="greetings-photo"></div>
        <div className="greetings-content">
          <h2>Hi there, I'm Michelle!</h2>
          <p className="subtitle-home">A Salt Lake City-Based Photographer</p>
          <p className="paragraph-home">
            From what was just a fun hobby of taking photos of landscapes,
            flowers, and grandkids, soon fostered a newfound obsession of
            photographing every single priceless moment. I fell completely in
            love with the art of telling stories through photography. Each
            wedding, maternity session, or engagement shoot is more than just
            capturing beautiful images, it’s about capturing the feelings of
            those movements and preserve them forever. I woul describe myself as
            a storyteller, world traveler, people lover and your new best
            friend. I love meeting new folks around the world so dont be
            hesitant to stop by and chat.
          </p>
          <div>
            <div className="hero-btns greet-Btn intro-btn">
              <Link to="/about" className="btns smol-btn">
                <Button
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                >
                  Lets Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery-banner">
        <h4>Capturing Every Ounce Of Magic Since 2020</h4>
      </div>

      <div className="home-gallery">
      <Masonry galleryImages={homeImages} />
      </div>
      

      <div className="about-container-set1">
        <div className="boquet-image"> </div>
        <div className="brides-image"><p>I'm always ready to capture every moment of joy, excitement, and love.</p></div>
      </div>

      <div className="about-container-set3">
        <div className="about-set3-container">
        <div className="embrace-image"><p>I hope to pull you right back into that very moment.</p></div>
        <div className="child-set3"></div>
        </div>
        <div className="wedding-couple-set3"></div>
      </div>

      <div className="about-container-set4">
        <div className="wedding-day-set4"><p>Your big day matters as much to me as it to you.</p></div>
        <div className="wedding-set4"> </div>
      </div>
      

      
      <div className="package-section">
        <h2>Popular Packages</h2>
      <div className="popular-packages-section">
        <div className="package-container">
          <div className="package-item-header">
            <h3>Engagements</h3>
          </div>
          <p>$175 - $275</p>{" "}
            <ul>
              <li>45-60 Min session</li>
              <li>One outfit change</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
            </ul>
          <Link to="/services" className="btn-mobile greet-Btn service-btn1">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Book Now
            </Button>
          </Link>
        </div>
        <div className="package-container">
          <div className="package-item-header">
            <h3>Weddings</h3>
          </div>
          <p>$875 - $2200</p>
            <ul>
              <li>Engagement session </li>
              <li>2 - 8 hrs. wedding day</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
              <li>Prices may vary</li>
            </ul>
          <Link to="/services" className="btn-mobile greet-Btn service-btn2">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Book Now
            </Button>
          </Link>
        </div>
        <div className="package-container">
          <div className="package-item-header">
            <h3>Maternity</h3>
          </div>
          <p>$150 - $275</p>
            <ul>
              <li>Two outfit changes</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
            </ul>
          <Link to="/services" className="btn-mobile greet-Btn service-btn3">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
