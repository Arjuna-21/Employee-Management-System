import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api';
import './Register.css';
import { toast } from 'react-toastify';

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await api.post('/auth/register', {
        username, password
      });
      toast.success("Registration Successful");

      navigate('/login');
    } catch (error) {
      toast.error("Registration Failed");
    }
  }
  return (
    <div className='register-container'>
      <div className="register-card">
        <h1 className='register-title'>Register</h1>
        <div className='register-form'>
          <label for="">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='register-form'>
          <label for="">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button onClick={register}>Register</button>
        <br />
      </div>

      <div className='login-link'>
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  )
}

export default Register