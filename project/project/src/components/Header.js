import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="App-header">
    <ul className="site-title">
      <li>
        <Link to={`/`}>Site Title</Link>
      </li>
      <li>
        <Link to={`/new`}>New Post</Link>
      </li>
    </ul>
  </header>
);

export default Header;
