import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Topic2B from './components/Topic2B/Topic2B';
import Login from './components/Login/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
    const [index, setIndex] = useState(1);

    const handleLogin = (indexData: number) => {
        setIndex(indexData);
    }
    return (
        <>

            {
                localStorage.getItem('username') ? <Dashboard /> :
                    index === 1 ?
                        <Login handleLogin={handleLogin} /> : <Dashboard />
            }
        </>
    );
}

export default App;
