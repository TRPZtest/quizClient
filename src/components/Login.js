import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  

    const handleLogin = () => {
        if (username && password) {
            // Submit the data to the backend for authentication          
           AuthService.login(username, password)
            .then(r => {
                localStorage.setItem("token", r.data.token);     
                window.location.href = '/';        
            })
            .catch(err => alert(err));

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