import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook

import './App.css'
import './Initialize.css'

const Initialize = () => {
  const { user } = useAuth0(); // Get user information from Auth0

  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome Back, {user.name}</h3>
        <br />
        <br />
        <br />
        <Link to="/HomePage">
          <button className="sign-in-button">
            <h3 className="Sign-in-string">Enter The Ghost Squad</h3>
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Initialize;
