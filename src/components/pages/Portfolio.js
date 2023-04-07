import React from "react";
import "../../App.scss";
import "./Portfolio.scss"
import "../pages/Portfolio.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Masonry from "../masonry";
import weddingImages from '../wedding-images.js';
import engageImages from '../engage-images.js';
import materintyImages from "../materinty-images";




function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="portfolio-contact-hero">
        <h1>Gallery</h1>
        
        
      </div>

    <div>
    <div className="about-gallery-banner" id="weddingGallery">
        <p>
          Wedding Gallery
        </p>
      </div>
      <div className="weddingSection">
      <Masonry galleryImages={weddingImages} />
    </div>
    <div className="about-gallery-banner">
        <p>
          Engagement Gallery
        </p>
      </div>
      <div className="engagementSection">
      <Masonry galleryImages={engageImages} />
      </div>
    </div>
    <div className="about-gallery-banner" id="weddingGallery">
        <p>
          Maternity Gallery
        </p>
      </div>
      <div className="maternitySection">
      <Masonry galleryImages={materintyImages} />
      </div>
      <div className="booknow">
        <h3>Ready to book?</h3>
        <Link to="/services" className="btn-mobile greet-Btn service-btn2">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--med"
            >
              Right this way
            </Button>
          </Link>
      </div>
      <Footer/>
  </div>  
  )
}

export default Portfolio