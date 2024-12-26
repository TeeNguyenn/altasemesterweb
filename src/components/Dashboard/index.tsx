import React, { useState } from 'react';
import './style.css';
import Footer from '../Footer';
import Header from '../Header';
import Demo1 from '../Demo1';
import Topic2B from '../Topic2B/Topic2B';
import Demo1911 from '../Demo1911/Demo1911';

const Dashboard = () => {
    const [indexSelected, setIndexSelected] = useState(1);

    const handleChange = (index: number) => {
        setIndexSelected(index);
    };
    return (
        <div style={{ height: '100vh' }}>
            <Header handleChange={handleChange} />
            {indexSelected === 1 ? <Demo1911 /> : <Topic2B />}
            <Footer />
        </div>
    );
};

export default Dashboard;
