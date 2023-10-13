import React, { useState } from "react";
import authService from "../services/AuthService";

export default function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            // Submit the data to the backend for authentication
            const token = authService.login(username, password);
            setToken(token);
        } else {
            alert('Both fields are required!');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}