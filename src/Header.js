import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav>
        <ul>
          {isAuthenticated ? (
            <li>
              <button onClick={() => logout()}>Log Out</button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
