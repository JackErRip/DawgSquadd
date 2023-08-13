import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import AboutUs from './AboutUs';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import LoginForm from './LoginForm';
import Initialize from './Initialize';
import ErrorNotFound from './ErrorNotFound';

function App() {
  // const { isLoading, isAuthenticated } = useAuth0();
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginForm />} />
          {isAuthenticated ? (
            <> 
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/Initialize" element={<Initialize />} />
              <Route path="/ErrorNotFound" element={<ErrorNotFound />} />
             </>
          ) : null} 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
