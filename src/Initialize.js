import React from 'react';
import { Link } from 'react-router-dom';

import './App.css'
import './Initialize.css'


const Initialize = () => {

    return(
<div className="App">
<header className="App-header">

{/* <h1 className="h1-sign-in-text">Sign In <br /> To Acess The Website</h1> */}

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