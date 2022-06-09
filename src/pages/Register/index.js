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
import api from '../../services/api';

// Validation .email("Email Inválido").required("E-mail é obrigatório")
const Schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email Inválido").required("E-mail é obrigatório"),
  password: Yup.string().required("Senha é obrigatório"),
});

function Register() {

  const history = useHistory();
  const { signIn, loading, setLoading } = useAuth();

   async function handleSubmit({ name, email, password }) {

    if (!name || !email || !password) {
      return toast.error("Não foi possível cadastrar este usuário. Preencha todos os campos corretamente!");
    }

    try {
      const response = await api.post("/users", {
        name,
        email, 
        password
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
      );

      console.log('data', name, email, password)

      localStorage.setItem("@mmsystem:user", response.data._id);

      await signIn({
        email,
        password,
      });

      toast.success("Usuário cadastrado com sucesso");

      history.push("/dashboard");

    } catch (error) {
      setLoading(false)
      //console.log("ERRO", error);
      return toast.error("Não foi possível cadastrar. Este usuário já existe!");
    }
  }

  return (
    <div id="Register-content" className="container">
      <div className="content">
        <div className="logo">
          <img src={logoImg} alt="logomark" />
        </div>
        <Form schema={Schema} onSubmit={handleSubmit}>
        <div className="input-type">
          <Input 
            type="name" 
            name="name" 
            id="name" 
            placeholder="Nome"
          />
          </div>
          <div className="input-type">
            <Input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              minLength="8"
            />
          </div>
         <div className="input-type">
            <Input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password"
              required 
              minLength="6"
            />
          </div>
          <button className="btn" type="submit">
            {loading ? <i style={{ fontSize: 5 }} className="fa fa-spinner fa-pulse"/> : 'Entrar' }
          </button>
          <div className="cadastro-email">
            <Link to="/" ><img src={RegisterIcon} color="#fff" alt="Envelope" /> Já tenho Login</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register;