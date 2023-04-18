import React from 'react';
import "./Footer.css"
import { FiFacebook } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <footer >
            <div className="container">
                <p> Copyright 2023 </p>
                <div className='container icon' >
                    <FiFacebook />
                    <BsInstagram />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
