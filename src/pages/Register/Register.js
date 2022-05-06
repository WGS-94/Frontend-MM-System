import React from 'react';
import './Register.css';

import logoImg from '../../img/logo.svg';
import RegisterIcon from '../../img/registo.svg';

function Regiter() {
  return (
    <div id="login-content" className="container">
      <div className="content">
        <div className="logo">
          <img src={logoImg} alt="logomark" />
        </div>
        <form>
        <div className="input-type">
            <input type="text" name="name" id="name" placeholder="Name"/>
          </div>
          <div className="input-type">
            <input type="email" name="email" id="email" placeholder="E-mail"/>
          </div>
         <div className="input-type">
            <input type="password" name="password" id="password" placeholder="Password  "/>
          </div>
          <div className="input-type">
            <input type="password" name="confirmPassword" id="password" placeholder="Confirm Password  "/>
          </div>
          <button className="btn" type="submit">Cadastrar</button>

          <div className="cadastro-email">
        <img src={RegisterIcon} alt="Envelope" />
        <a href="/" >Já tenho Login</a>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Regiter;