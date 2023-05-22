import React, { useState } from 'react';
import axios from 'axios'
import './LandingPage.css'
import tokenService from '../../utils/tokenAuth';

let {setToken} = tokenService
const BACKEND_URL = 'http://localhost:9000/'

const LandingPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login or register logic based on the state
    if (isRegistering) {
      // Register logic
      if (password === confirmPassword) {
        // Perform registration logic
        axios
          .post(`${BACKEND_URL}register`, { email, password })
          .then((res) => {
            console.log(res);
            const { token } = res.data; // Check the response structure and adjust accordingly
            setToken(token);

          })
          .catch((err) => console.log(err));
        console.log('Registration success!');
        // handleRegister(email, password)
      } else {
        console.log('Passwords do not match!');
      }
    } else {
      // Login logic
      axios
        .post(`${BACKEND_URL}login`, { email, password })
        .then((res) => {
          console.log(res);
          const { token } = res.data; // Check the response structure and adjust accordingly
          setToken(token);
          window.location.reload(true)
        })
        .catch((err) => console.log(err));
      console.log('log in success!');
      // handleLogin(email, password)
    }
  };

  const handleToggleMode = () => {
    setIsRegistering((prevState) => !prevState);
  };

  return (
    <div className='formContainer'>
      <h1 className='formTitle'>{isRegistering ? 'Register' : 'Login'}</h1>
      <button className='toggleBtn' onClick={handleToggleMode}>
        {isRegistering ? 'Switch to Login' : 'Switch to Register'}
      </button>
      <form >
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {isRegistering && (
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        )}
        <button className='submitBtn' type="submit" onClick={handleSubmit}>{isRegistering ? 'Register' : 'Login'}</button>
      </form>
  
    </div>
  );
};

export default LandingPage;
