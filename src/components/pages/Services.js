import React from "react";
import "../../App.scss";
import "../pages/Services.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Services() {
  return (
    <div className="services">
      <div className="services-hero">
        <h1>Services</h1>
      </div>

      <div className="options-right">
        <div className="options-right-photo-1" />
        <div className="content-container">
          <h4>Couples & Engagments</h4>
          <div className="list-container">
            <p>Starting at $175</p>
            <ul>
              <li>45 - 60 minute session at a location of your choice.</li>
              <li>One outfit change.</li>
              <li>Print release.</li>
              <li>Online digital gallery.</li>
              <li>Albums available upon request.</li>
            </ul>
          </div>
          <div className="button-content-container">
            <p>Pricing may vary*</p>
            <Link to="/contact" className="btn-mobile greet-Btn">
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
      
      <div className="options-left">
        
        <div className="content-container-left">
          <h4>Weddings</h4>
          <div className="list-container-left">
            <p>Starting at $875</p>
            <ul>
              <li>Engagement session.</li>
              <li>2 - 8 hour wedding day coverage.</li>
              <li>Online galleries with edited digital files.</li>
              <li>Print release.</li>
              <li>Albums available upon request.</li>
              <li>Additional hours of coverage is $125.</li>
              <li>Flexible budget.</li>
            </ul>
          </div>
          <div className="button-content-container-left">
            <p>Pricing may vary*</p>
            <Link to="/contact" className="btn-mobile greet-Btn">
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
        <div className="options-left-photo-1" />
      </div>

      <div className="options-right">
        <div className="options-right-photo-2" />
        <div className="content-container">
          <h4>Maternity</h4>
          <div className="list-container">
            <p>Starting at $150</p>
            <ul>
              <li>Two outift changes if desired.</li>
              <li>Print release.</li>
              <li>Online digital gallery.</li>
              <li>Albums available upon request.</li>
            </ul>
          </div>
          <div className="button-content-container">
            <p>Pricing may vary*</p>
            <Link to="/contact" className="btn-mobile greet-Btn">
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
      <div className="options-left">
        
        <div className="content-container-left">
          <h4>Bridals</h4>
          <div className="list-container-left">
            <p>Starting at $225</p>
            <ul>
              <li>90 - 120 minute session of your choice.</li>
              <li>Online galleries with edited digital files.</li>
              <li>Print release.</li>
              <li>Albums available upon request.</li>
            </ul>
          </div>
          <div className="button-content-container-left">
            <p>Pricing may vary*</p>
            <Link to="/contact" className="btn-mobile greet-Btn">
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
        <div className="options-left-photo-2" />
      </div>
      <div className="options-right">
        <div className="options-right-photo-3" />
        <div className="content-container">
          <h4>Elopements</h4>
          <div className="list-container">
            <p>Starting at $500</p>
            <ul>
              <li>Engagement session.</li>
              <li>2 - 8 hour wedding day coverage.</li>
              <li>Online galleries with edited digital files</li>
              <li>Print release.</li>
              <li>Albums available upon request.</li>
              <li>Additional hours of coverage is $125.</li>
            </ul>
          </div>
          <div className="button-content-container">
            <p>Pricing may vary*</p>
            <Link to="/contact" className="btn-mobile greet-Btn">
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
      <div className="options-left">
        <div className="content-container-left">
          <h4>Destination Bridals</h4>
          <div className="list-container-left">
            <p>Pricing may vary</p>
            <ul>
              <li>Spend day or night with photographer.</li>
              <li>Time spent looking for places to take photographs.</li>
              <li>Pricing may increase the further outside of the greater Salt Lake City area.</li>
              <li>Online digital gallery.</li>
              <li>Albums available upon request.</li>
            </ul>
          </div>
          <div className="button-content-container-left">
            <p>May be denied depending on location*</p>
            <Link to="/contact" className="btn-mobile greet-Btn">
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
        <div className="options-left-photo-3" />
      </div>
      <div className="disclaimer"><p>*Travel outside of greater Salt Lake City may change pricing for all packages*</p></div>
      <Footer/>
    </div>
  );
}

export default Services;
