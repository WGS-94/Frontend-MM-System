import React from 'react';
import '../Login/Login.css';

import logoImg from '../../img/logo.svg';
import RegisterIcon from '../../img/registo.svg';

function Login() {
  return (
    <div id="login-content" className="container">
      <div className="content">
        <div className="logo">
          <img src={logoImg} alt="logomark" />
        </div>
        <form>
          <div className="input-type">
            <input type="email" name="email" id="email" placeholder="E-mail"/>
          </div>
         <div className="input-type">
            <input type="password" name="password" id="password" placeholder="Password  "/>
          </div>
          <button className="btn" type="submit">Entrar</button>
          <div className="cadastro-email">
            <img src={RegisterIcon} color="#fff" alt="Envelope" />
            <a href="/register" >Cadastrar E-mail</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;