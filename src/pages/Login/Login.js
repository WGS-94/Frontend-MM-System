import React from 'react';
import { toast } from "react-toastify";
//import api from '../../services/api';
import { Form, Input } from "@rocketseat/unform";
import { Link, useHistory } from "react-router-dom";
import logoImg from '../../img/logo.svg';
import RegisterIcon from '../../img/registo.svg';
import * as Yup from "yup";
import '../Login/Login.css';

import { useAuth } from "../../hooks/auth";

// Validation .email("Email Inválido").required("E-mail é obrigatório")
const Schema = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string(),
});

function Login() {

  const history = useHistory();
  const { signIn, loading, setLoading } = useAuth();
  //const [hiddenPassword, setHiddenPassord] = useState(true)

   //const loading = useSelector(useAuth()); , { useState }

   async function handleSubmit({ email, password }) {

   // event.preventDefault()

    try {
      await signIn(
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      /*localStorage.setItem('token', response.data.token)
      console.log('token', response.data.token)*/

      history.push("/dashboard");

      toast.success(`Bem vindo, Login efetuado com sucesso!`);
    } catch (error) {
      setLoading(false)
      toast.error("Senha ou E-mail incorretos!");
    }
  }

  return (
    <div id="login-content" className="container">
      <div className="content">
        <div className="logo">
          <img src={logoImg} alt="logomark" />
        </div>
        <Form schema={Schema} onSubmit={handleSubmit}>
          <div className="input-type">
            <Input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="E-mail"
            />
          </div>
         <div className="input-type">
            <Input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password"
            />
          </div>
          <button className="btn" type="submit">
            {loading ? <i style={{ fontSize: 5 }} className="fa fa-spinner fa-pulse"/> : 'Entrar' }
          </button>
          <div className="cadastro-email">
            <img src={RegisterIcon} color="#fff" alt="Envelope" />
            <Link to="/register" >Cadastrar E-mail</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login;