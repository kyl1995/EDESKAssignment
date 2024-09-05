import React, { useState } from 'react';
import './LeftTabView.css';
import HomeTab from './HomeTab';
import Login from './Login';
import NewPages from './NewPage';

const LeftTabView = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setActiveTab(1);
    };

    const handleLogoutSuccess = () => {
        setIsLoggedIn(false);
        setActiveTab(1);
    };

    const tabs = [
        { title: 'Home', content: <HomeTab/> },
        { title: 'Profile', content: isLoggedIn ? <NewPages onLogoutSuccess={handleLogoutSuccess} /> : <Login onLoginSuccess={handleLoginSuccess} /> },
        { title: 'Message', content:<h1>Under Maintenance</h1>},
        { title: 'Setting', content: <h1>Under Maintenance</h1> },
    ];


    return (
        <div className="left-tab-view">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <p>{tabs[activeTab].content}</p>
            </div>
        </div>
    );
};

export default LeftTabView;