// src/components/WebsiteOpener.js

import React from 'react';
import { Link } from 'react-router-dom';

const WebsiteOpener = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/second">Go to Second Page</Link>
      {/* Your other content */}
    </div>
  );
};

export default WebsiteOpener;