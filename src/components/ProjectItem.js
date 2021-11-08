import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function ProjectItem(props) {
  return (
    <>
      <li className='projects__item'>
        <Link className='projects__item__link'>
          <figure className='projects__item__pic-wrap' >
            <img
              className='projects__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='projects__item__title'>
            <h5 className='projects__item__title'>{props.title}</h5>
          </div>
          <div className='projects__item__info'>
            <i className='fas fa-cube' />
            <h6 className='projects__item__text'>{props.text1}</h6>
          </div>
          <div className='projects__item__info'>
            <i className='fas fa-thermometer-three-quarters' />
            <h6 className='projects__item__text'>{props.text2}</h6>
          </div>
          <div className='projects__item__info'>
            <i className='fas fa-bed' />
            <h6 className='projects__item__text'>{props.text3}</h6>
          </div>
          <div className='projects__item__info'>
            <i className='far fa-map' />
            <h6 className='projects__item__text'>{props.text4}</h6>
          </div>
          <div className='projects__item__info'>
            <i className='far fa-edit' />
            <h6 className='projects__item__text'>{props.text5}</h6>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProjectItem;
