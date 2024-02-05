import { FaGithub, FaTwitter } from 'react-icons/fa';
import React from 'react';
import { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer() {
    return (
        <footer className='bg-info-subtle card-footer'>
            <p>Website by: Kamil Szerszeń <br/>
                <a href="https://github.com/GreberPl" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
                <a href="https://twitter.com/Greber_Essa" target="_blank" rel="noopener noreferrer"> <FaTwitter /></a>
            </p>
        </footer>
    );
}