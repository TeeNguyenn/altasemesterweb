import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Demo2 = () => {
    return (
        <div className='home'>
            <header className='header'>
                <a href='#!' className='logo-link'>
                    <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h2-logo-1.png" alt="" className='logo' />
                </a>
                <div className='wrapper'>
                    <nav>
                        <ul className="navlist">
                            <li className="nav-item"><a href="#!" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">Page</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">Shop</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">Portfolio</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">Elements</a></li>
                        </ul>
                    </nav>
                    <div className='actions'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>CART ($0)</span>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="subcontainer">
                    <div className="item">
                        <img className="img" src="images/flower1.jpg" alt=""></img>
                    </div>
                    <div className="item">
                        <img className="img" src="images/flower2.jpg" alt=""></img>
                    </div>
                    <div className="item">
                        <img className="img" src="images/flower3.jpg" alt=""></img>
                    </div>
                </div>
                <div className="subcontainer">
                    <div className="item">
                        <img className="img" src="images/flower3.jpg" alt=""></img>
                    </div>
                    <div className="item">
                        <img className="img" src="images/flower2.jpg" alt=""></img>
                    </div>
                    <div className="item">
                        <img className="img" src="images/flower1.jpg" alt=""></img>
                    </div>
                </div>
                <div className="subcontainer">
                    <div className="item">
                        <img className="img" src="images/flower2.jpg" alt=""></img>
                    </div>
                    <div className="item">
                        <img className="img" src="images/flower1.jpg" alt=""></img>
                    </div>
                    <div className="item">
                        <img className="img" src="images/flower3.jpg" alt=""></img>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <div className='footer-wrapper'>
                    <h2 className='title'>Customer Service</h2>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#!" className="footer-link">Help & Contact Us</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Returns & Refunds</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Online Stores</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className='footer-wrapper'>
                    <h2 className='title'>Company</h2>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#!" className="footer-link">About Us</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Blog</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Order Tracking</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">FAQ</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Contact Us
                        </a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Login</a></li>
                    </ul>
                </div>
                
                <div className='footer-wrapper'>
                    <h2 className='title'>Social Media</h2>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#!" className="footer-link">Twitter</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Instagram</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Tumblr</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Pinterest</a></li>
                    </ul>
                </div>
                <div className='footer-wrapper'>
                    <h2 className='title'>Archive</h2>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#!" className="footer-link">Designer Shoes</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Gallery</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Pricing</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Feature Index</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Login</a></li>
                        <li className="footer-item"><a href="#!" className="footer-link">Help & Support</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Demo2;
