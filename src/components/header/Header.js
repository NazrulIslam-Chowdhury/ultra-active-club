import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <FontAwesomeIcon className='font-awesome' icon={faDumbbell}></FontAwesomeIcon>
            <h1>Ultra Active Club</h1>
        </nav>
    );
};

export default Header;