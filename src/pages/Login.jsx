import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <section className="auth-form">
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="btn primary" type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
