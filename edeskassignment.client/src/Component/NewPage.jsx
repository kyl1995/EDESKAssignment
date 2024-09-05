import React, { useState, useRef } from 'react';

const NewPage = ({ onLogoutSuccess = () => { } }) => {
    const logout = () => {
        alert('Logout successful');
        onLogoutSuccess();
    };

    return (
        <div>
            <h1>Under Maintenance</h1>
            <button id="btnLogout" style={{ background: '#bd2323', color: 'white' }} onClick={logout} >Logout</button>
        </div>
    );
};

export default NewPage;