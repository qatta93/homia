import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='images/home.jpg'/>
      <h1>domy do 35m²</h1>
      <p>Poznaj cenę i termin w 20 sekund!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PROJEKTY
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          KONTAKT &nbsp;<i className='fas fa-phone-square-alt' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
