import React from 'react';
import './register.css'; // Import the CSS file

const Register: React.FC = () => {
    return (
        <div className="center-wrapper">
            <div className="form-container">
                <h2>Register</h2>
                <h1>Please fill in the details below</h1>
                <form action="/submit_registration" method="post">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname" required />

                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" id="lastname" name="lastname" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required />

                    <label htmlFor="number">Number:</label>
                    <input type="text" id="number" name="number" required />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
