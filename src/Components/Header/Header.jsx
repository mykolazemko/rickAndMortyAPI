import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className='header'>
            <Link style={{ textDecoration: 'none' }} to="/">
                <span className='header__logo'>
                    <h3>Characters</h3>
                </span>
            </Link>
        </div>
    )
}

export default Header