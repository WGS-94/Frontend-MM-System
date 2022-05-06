import React from 'react';
import './Nav.css';
import logoImg from '../../img/logo.svg';

function Nav() {
  return (
    <div>
      <nav class="navbar">
        <div class="logoImg">
          <img src={logoImg} alt="logomark" />
        </div>
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <div class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Nav