import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistory from './auth0-provider-with-history';
import { Auth0Provider } from '@auth0/auth0-react';
import authConfig from './auth0-config';

ReactDOM.render(
  <Auth0Provider
    domain={authConfig.domain}
    clientId={authConfig.clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
