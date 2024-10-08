import { Link } from "react-router-dom";

import React from "react";

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/about">About</Link> 
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;