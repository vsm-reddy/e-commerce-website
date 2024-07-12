import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = ({ switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Show the message from the backend
            if (data.message === 'Registration successful') {
                switchToLogin(); // Redirect to login page if registration was successful
            }
            // Clear the form data
            setUsername('');
            setEmail('');
            setPassword('');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Server error'); // Show server error message in case of fetch error
            // Clear the form data in case of error as well
            setUsername('');
            setEmail('');
            setPassword('');
        });
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleRegister}>
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="username">Username *</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="register-button">REGISTER</button>
                <div className="register-section">
                    <p>Already have an account? <a href="#" onClick={switchToLogin}>Log in</a></p>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
