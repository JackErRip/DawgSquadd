import React, { useState } from 'react';
import './App.css';
import './Initialize.css';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the provided email and password are valid
    if (email === 'Phoenix' && password === 'Hendrix') {
      // Redirect to the Initialize page (you can adjust the URL as needed)
      window.location.href = '/Initialize';
    } else {
      // Redirect to the ErrorNotFound page
      window.location.href = '/ErrorNotFound';
    }
  };

  return (
    <header className="App-header">
      <h1>Sign In To Acces Ghost Squad</h1>
    <form onSubmit={handleSubmit}>
      <div>
        
        <label htmlFor="email">Username: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: &nbsp;</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        
      </div>
      <br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button type="submit" className="sign-in-button-login"><h3 className="Sign-in-string">Login</h3></button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    </header>
  );
};

export default LoginForm;
