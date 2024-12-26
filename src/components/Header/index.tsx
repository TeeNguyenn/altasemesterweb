import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css';

interface HeaderProps {
    handleChange: (index: number) => void;
}

const Header = (props: HeaderProps) => {


    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className='container1'>
            <div className='menu'>
                <ul>
                    <li><a onClick={() => props.handleChange(1)}>Flowers</a></li>
                    <li><a onClick={() => props.handleChange(2)}>Change color</a></li>
                    <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
            </div>
            <div className='wrapper'>
                <img src="https://altasoftware.vn/wp-content/uploads/sites/3/2020/05/Logo-Alta-Software_blackBG.png" alt="" />
                <h1>ALTA ENTERPRISE SEMESTER FOR FRONT END</h1>
            </div>

        </div>
    );
};

export default Header;
