import React from 'react';
import './Technology.css';


function Technology() {
    return (
        <div className='technology__container'>
            <h1>TECHNOLOGIA</h1>
            <div className='technology__wrapper'>
                <ul className='technology__columns'>
                    <li>
                        <p>✓   konstrukcja drewniana -  szkieletowa  (kanadyjska)</p>
                        <p>✓   domy prefabrykowane - modułowe lub panelowe</p>
                        <p>✓   wymagania cieplne zgodne z normami europejskimi PN-ENISO6946:2008 dla domów energooszczędnych</p>
                    </li>
                    <li>
                        <img src='images/technology.jpg' className='tech__img'/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Technology;