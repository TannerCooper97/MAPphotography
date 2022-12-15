import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
       <video src="/videos/ring-video.mp4" autoPlay muted/>
        <h1>Capture Every Moment</h1>
        <div className="hero-btns">
          <Link to='/services' className='btn-mobile'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Book Now</Button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection