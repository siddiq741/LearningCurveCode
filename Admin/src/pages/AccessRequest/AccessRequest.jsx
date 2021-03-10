import React from 'react';
import { Link } from 'react-router-dom';
import './AccessRequest.css';

function AccessRequest() {
    return (
      <div className="access-request-form-container">
        <form className="access-request-form">
          <h1>Request Access</h1>
          <label  className = 'access-request-form-label' for = 'name'>Full Name </label>
          <input  className = 'access-request-form-input'type="text"   name="name" />
          <label  className = 'access-request-form-label' for = 'password'>Email Id</label>
          <input  className = 'access-request-form-input'type="text"   name="email" />
          <label  className = 'access-request-form-label' for = 'message'>Message</label>
          <textarea type="text" className = 'access-request-message-box'  name="message" />
          <div className = 'access-request-buttons-container'>
            <Link to='/login'  className = 'access-request-form-button'>
                <button id = 'access-request-back' >Back</button>
            </Link>
            <button className = 'access-request-form-button'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default AccessRequest;