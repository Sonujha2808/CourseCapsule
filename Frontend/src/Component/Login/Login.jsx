import React, { useState } from 'react';
import './Login.css';
import illustration from '../photo/image.png';
import { useAuth } from '../../context/AuthContext';
import logo from '../photo/logo.png';

const Login = () => {
    const { loginAndSaveTheUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State to track checkbox

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            valid = false;
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (!isCheckboxChecked) {
            alert('You must check the box to proceed!');
            valid = false;
        }

        if (valid) {
            fetch('https://coursecapsule-1.onrender.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
                .then((response) => response.json())
                .then((data) => {
                    loginAndSaveTheUser(data.user);
                    alert('Login successful');
                    window.location.href = '/';
                })
                .catch((error) => console.error('Error:', error));
        }
    };

    return (
        <>
            <nav className="nav">
                <div className="brand">
                    <img src={logo} alt="CourseCapsule" className="logo" />
                    <h1>CourseCapsule</h1>
                </div>
            </nav>
            <div className="login-container">
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {emailError && <span className="error">{emailError}</span>}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter 6 characters or more"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {passwordError && <span className="error">{passwordError}</span>}
                        </div>
                        <div className="form-group">
    <label className="robot-checkbox-group">
        <input
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
        />
        <span>I'm not a robot</span>
    </label>
    {!isCheckboxChecked && <div className="error">You must check the box!</div>}
</div>

                        <div className="form-group">
                            <button
                                type="submit"
                                className="submit-button"
                                disabled={!isCheckboxChecked} // Disable button if not checked
                            >
                                Login
                            </button>
                        </div>
                        <p className="signup-link">
                            Don't have an account yet? <a href="/signup">Sign Up</a>
                        </p>
                    </form>
                </div>
                <div className="illustration-container">
                    <img src={illustration} alt="Illustration" />
                </div>
            </div>
        </>
    );
};

export default Login;
