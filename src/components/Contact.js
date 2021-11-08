import React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div className='contact__container'>
            <ul className='contact__columns'>
                <li>
                    <div className='contact__text'>
                        <h1>KONTAKT</h1>
                        <p>+48 500107016</p>
                        <p>info@homia.com.pl</p>
                        <p>Lublin, Polska</p>
                    </div>
                </li>
                <li><img src='images/contact.jpg' className='contact__img'/></li>
            </ul>
        </div>
    );
}

export default Contact;