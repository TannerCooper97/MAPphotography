import React from "react";
import "../../App.scss";
import HeroSection from "../HeroSection";
import "../pages/Home.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { homePageImages } from "../../images/imageIndex";
import Gallery from "../Gallery";
import Footer from "../Footer";

function Home() {
  return (
    <div>
       <HeroSection/>
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
          <div className="hero-btns greet-Btn">
          <Link to='/about' className='btns'>
            <Button className='btns' buttonStyle='btn--outline-black' buttonSize='btn--large'>Lets Connect</Button>
            </Link>
        </div>
          {/* <Link to="/about" className="btn-mobile greet-Btn">
            <Button
              className="btns"
              buttonStyle="btn--outline-black"
              buttonSize="btn--large"
            >
              Lets Connect
            </Button>
          </Link> */}
          </div>
        </div>
      </div>
      <div className="home-gallery-banner">
        <h4>Capturing Every Ounce Of Magic Since 2020</h4>
      </div>
      {/* <Gallery images={homePageImages}/> */}
      <div className="home-packages-banner">
        <h4>Most Popular Packages</h4>
        <p className="package-subheading">
          Lets get you ready for memories that will last forever and ever
        </p>
      </div>
      <div className="popular-packages-section">
        <div className="package-container">
          <div className="package-item">
            <h3>Engagements</h3>
            <p>$175 - $275</p>{" "}
            <ul>
              <li>45-60 Min session</li>
              <li>One outfit change</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
            </ul>
          </div>
          <Link to="/services" className="btn-mobile greet-Btn">
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
          <div className="package-item">
            <h3>Weddings</h3>
            <p>$875 - $2200</p>
            <ul>
              <li>Engagement session </li>
              <li>2 - 8 hrs. wedding day</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
              <li>Prices may vary</li>
            </ul>
          </div>
          <Link to="/services" className="btn-mobile greet-Btn">
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
          <div className="package-item">
            <h3>Maternity</h3>
            <p>$150 - $275</p>
            <ul>
              <li>Two outfit changes</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
            </ul>
          </div>
          <Link to="/services" className="btn-mobile greet-Btn">
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
      <Footer/>
    </div>
  );
}

export default Home;
