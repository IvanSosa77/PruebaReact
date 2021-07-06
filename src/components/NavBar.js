import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
  const style = {
    display: "flex",
    background: "red",
  };

  return (
    <div style={style}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Products">Products</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </div>
  );
}

export default NavBar;
