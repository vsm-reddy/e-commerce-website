import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ switchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.message === 'Login successful') {
                navigate('/'); // Redirect to the home page
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button type="submit" className="login-button">LOG IN</button>
                <div className="register-section">
                    <p>Don't have an account? <a href="#" onClick={switchToRegister}>Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
