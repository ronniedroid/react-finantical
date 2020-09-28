import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-items">
        Expenses
      </Link>
      <Link to="/Summary" className="nav-items">
        Summary
      </Link>
      <Link to="/Settings" className="nav-items">
        Settings
      </Link>
    </nav>
  );
};

export default Nav;
