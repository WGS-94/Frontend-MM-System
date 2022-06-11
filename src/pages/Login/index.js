import React, { useState } from 'react';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import RegisterIcon from '../../assets/registo.svg';

function Login() {

  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/sessions', { email });
    const { _id } = response.data;

    localStorage.setItem('user', _id);
    
  }

  return (
    <div id="login-content" className="container">
      <div className="content">
        <div className="logo">
          <img src={logoImg} alt="logomark" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-type">
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
          </div>
         {/* <div className="input-type">
            <input type="password" name="password" id="password" placeholder="Password  "/>
          </div>*/}
          <button className="btn" type="submit">ENTRAR</button>

          <div className="cadastro-email" >
            <img src={RegisterIcon} alt="Envelope" />
            <a href="/register" >Cadastrar E-mail</a>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login;