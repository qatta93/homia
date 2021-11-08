import React from 'react';
import './Faq.css';


function Faq() {
    return (
        <div className='faq__container'>
            <ul className='faq__columns'>
                <li><img src='images/faq.jpg' className='faq__img'/></li>
                <li>
                    <div className='faq__text'>
                        <h1>FAQ</h1>
                        <p>Pytania? Sprawdź naszą sekcję najczęściejzadawanych pytań!</p>
                        <p>Jeśli nie znajdziesz tam odpowiedzi, napisz do nas.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Faq;