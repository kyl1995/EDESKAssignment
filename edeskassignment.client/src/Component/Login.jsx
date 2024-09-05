import React, { useState, useRef,useEffect } from 'react';
import $ from 'jquery';

const Login = ({ onLoginSuccess = () => { } }) => {
    const sampleData = [
        {
            id: 1,
            username: 'admin',
            password: 'admin123',
        },
        {
            id: 2,
            username: 'super',
            password: 'super123',
        },
        {
            id: 3,
            username: 'wonder',
            password: 'wonder123',
        },
        {
            id: 4,
            username: 'stranger',
            password: 'stranger123',
        }
    ];

    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        $(usernameRef.current).focus();
    });

    const validateUser = () => {
        const user = $(usernameRef.current).val();
        const pass = $(passwordRef.current).val();

        if (!user || !pass) {
            alert('Username and password cannot be empty.')
            return;
        }

        setUsername(user);
        setPassword(pass);

        const validatedUser = $.grep(sampleData, x =>
            x.username === user && x.password === pass
        );

        if (validatedUser.length > 0) {
            alert('Login successful');
            onLoginSuccess();
        }
        else {
            alert('Username or password is not correct');
        }
    };

    const clearInput = () => {
        $(usernameRef.current).val('');
        $(passwordRef.current).val('');
        setUsername('');
        setPassword('');
        $(usernameRef.current).focus();
    }

    return (
        <div style={{ margin: '10px'}}>
            <h2>Login</h2>
            <div style={{ display: 'flex', flexDirection: 'column', background: 'LightGray', border: '10px solid LightGray', borderRadius: '5px' }}>
                <div style={{ display: 'flex', padding: '10px' }}>
                    <label htmlFor="loginInput" style={{ marginRight: '10px' }}>Username:</label>
                    <input id="username" type="text" ref={usernameRef} />
                </div>
                <div style={{ display: 'flex', padding: '10px' }}>
                    <label htmlFor="loginInput" style={{ marginRight: '15px' }}>Password:</label>
                    <input id="password" type="password" ref={passwordRef} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                <button id="btnLogin" style={{ background: 'SlateGray' }} onClick={validateUser} >Login</button>
                <button id="btnClear" style={{ border: '2px solid black' }} onClick={clearInput } >Clear</button>
            </div>
        </div>
    );
};

export default Login;