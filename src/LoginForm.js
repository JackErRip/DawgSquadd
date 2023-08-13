import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './LoginForm.css';
import './App.css';

function LoginForm() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      redirectUri: 'https://dawg-squadd.vercel.app/Initialize', // Update with your desired URL
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
      <h3>You Need To Be Log In To Continue</h3>
      <br />
      <br />
      <br />
      <button onClick={handleLogin} className='sign-in-button-login'>
        <h3>Click Here To Continue</h3>
        </button>
      </header>
    </div>
  );
}

export default LoginForm;
