import React from 'react';
import { useAuth } from "../../hooks/auth";

import logoImg from '../../img/logo.svg';

import './Nav.css';

function Nav() {

  const { signOut } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <div className="logoImg">
          <img src={logoImg} alt="logomark" />
        </div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
          <div className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
            <button type="button" onClick={signOut}>Sair</button>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Nav