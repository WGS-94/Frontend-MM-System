import React from 'react';
import { useAuth } from "../../hooks/auth";

import logoImg from '../../assets/logo.svg';

import './style.css';

function Header() {

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
            <li><a href="/">Início</a></li>
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Serviços</a></li>
            <li><a href="/">Contato</a></li>
            <button type="button" onClick={signOut}>Sair</button>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Header;