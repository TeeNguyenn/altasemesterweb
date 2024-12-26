import React from 'react';
import './style.css';

const Demo1 = () => {
    return (
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
    );
};

export default Demo1;
