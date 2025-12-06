import React from 'react';
import Logo from '../assets/logo_transparent.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo"><img src={Logo} width={150} height={50} alt="Temuulen Logo" /></div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;