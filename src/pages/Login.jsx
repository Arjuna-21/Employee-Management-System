import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api';
import './Login.css';
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const response = await api.post("auth/login", {
                username, password
            });

            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch {
            toast.error("Invalid Email or password");
        }
    }
    return (
        <div className='login-container'>
            <div className="form-card">
                <h1 className='login-title'>Login</h1>
                <label for="" className="form-group">Username</label>
                <input type="text" placeholder='Enter Name' onChange={(e) => setUsername(e.target.value)} />
                <br /><br />
                <label for="" className="form-group">Password</label>
                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                <br /><br />

                <button className='login-btn' onClick={login}>Login</button>
            </div>
            <div className="register-link">
                Don't have an account <a href="/register">Register</a>
            </div>
        </div>
    )
}

export default Login