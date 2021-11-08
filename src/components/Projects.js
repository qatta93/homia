import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';

function Projects() {
    return (
        <div className='projects-container'>
            <div className='projects'>
                <h1> PROJEKTY </h1>
                <p>Posiadamy dwa gotowe projekty domów do 35m2. Oprócz tego realizujemy także projekty indywidualne!</p>
                <div className='projects__container'>
                    <div className='projects__wrapper'>
                    <ul className='projects__items'>
                        
                        <ProjectItem
                        src='images/house-1.jpg'
                        title='H1 GLAZED'
                        text1='35m2'
                        text2='całoroczny'
                        text3='6 osób'
                        text4='sypialnia, łazienka, kuchnia, salon, antresola'
                        text5='na zgłoszenie'
                        path='/services'
                        />
                        <ProjectItem
                        src='images/house-12.jpg'
                        title='H2 SIMPLE'
                        text1='35m2'
                        text2='całoroczny'
                        text3='6 osób'
                        text4='sypialnia, łazienka, kuchnia, salon, antresola'
                        text5='na zgłoszenie'
                        path='/services'
                        />
                    </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Projects;