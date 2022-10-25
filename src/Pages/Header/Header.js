import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Link to='/'>Red-Code</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/toggle'>Toggle</Link>
            <Link to='/user'>User</Link>

        </div>
    );
};

export default Header;