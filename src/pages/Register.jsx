import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <section className="auth-form">
      <h2>Register</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="btn primary" type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
