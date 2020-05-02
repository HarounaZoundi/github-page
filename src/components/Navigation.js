import React from 'react';
function Navigation() {
    return (
      <nav className="navbar navbar-expand-sm d-flex justify-content-center navbar-dark bg-dark shadow mb-3">
        <ul className="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link " href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#Projects">Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#Skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
  export default Navigation;