import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => (
    <div className="login-page">
      <div className="login-page-image">
        <img src='assets/hands2.png' alt="hands"/>
      </div >
      <div className="login-page-form-container">
        <h1 className = 'login-page-heading'>Company Login</h1>
        <p className = 'login-page-para'>Hello Creator</p>
        <p className = 'login-page-sub-heading'>Let's build something amazing today!</p>
        <h1 className = 'login-page-heading'>Sign In</h1>
        <form className="login-page-form">
          <label  className = 'login-page-form-label' for = 'email'>Email</label>
          <input  className = 'login-page-form-input'type="text"   name="email" />
          <label  className = 'login-page-form-label' for = 'password'>Password</label>
          <input  className = 'login-page-form-input'type="password"   name="password" />
          <div className = 'submit-button-and-request-access-container'>
            <div className = 'request-access-container'>
              <p className = ''>Not having access?</p>
              <Link to ='/access-request' className = 'request-access'>Request Access.</Link>
            </div>
            <button  className = 'login-page-form-button'>Submit</button>
          </div>
        </form>
        
      </div>
    </div>
  );

  export default Login;