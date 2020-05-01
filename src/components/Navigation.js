import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link,
    NavLink
  } from 'react-router-dom';
function Navigation() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/posts/new">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about-us">
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about-us">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  export default Navigation;