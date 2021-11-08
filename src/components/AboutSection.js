import React from 'react';
import './AboutSection.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <h1>Dlaczego my?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/reason-1.jpg'
              text='Współpracujemy z doświadczonymi inżynierami, specjalizującymi się w domach szkieletowych.'
            />
            <CardItem
              src='images/reason-2.jpg'
              text='Konstrukcja wycinana jest na maszynach CNC, które dają gwarancję precyzyjnej obróbki.'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/reason-3.jpg'
              text='Gwarancja jakości -  materiały budowlane posiadają certyfikaty jakości oraz są przechowywane w odpowiednich warunkach.'
              path='/services'
            />
            <CardItem
              src='images/reason-4.jpg'
              text='Pasja do innowacji - wzorując się technologią u zachodnich sąsiadów, wciąż wdrażamy nowe rozwiązania prefabrykacji.'
              path='/products'
            />
          </ul>
          {/* <Button
          className='btnAbout'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PROJECTS
        </Button> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
