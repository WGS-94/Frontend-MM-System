import React from 'react';
import { toast } from "react-toastify";
import { Form, Input } from "@rocketseat/unform";
import { Link, useHistory } from "react-router-dom";
import logoImg from '../../assets/logo.svg';
import RegisterIcon from '../../assets/registo.svg';
import * as Yup from "yup";
import { useAuth } from "../../hooks/auth";
import api from '../../services/api';

import {Container, Content, LogoType } from './style';

// Validation .email("Email Inválido").required("E-mail é obrigatório")
//.required("Nome é obrigatório"), .required("Senha é obrigatório"),
const Schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string(),
  password: Yup.string()
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

      localStorage.setItem("@mmsystem:userID", response.data._id);

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
    <Container>
      <Content>
        <LogoType>
          <img src={logoImg} alt="logomark" />
        </LogoType>
        <Form schema={Schema} onSubmit={handleSubmit}>
          <Input 
            type="name" 
            name="name" 
            id="name" 
            placeholder="Nome"
          />
          <Input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="E-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            minLength="8"
          />
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Password"
            required 
            minLength="6"
          />
          <button type="submit">
            {loading ? <i 
                className="fa fa-spinner fa-pulse fa-4x" 
                aria-hidden="true"
                style={{fontSize: 30, color: 'red' }}  
              /> : 'Entrar' 
            }
          </button>
          <Link to="/">
            <div>
              <img src={RegisterIcon} color="#fff" alt="Envelope" /> 
              <span>Já tenho Login</span>
            </div>
          </Link>
        </Form>
      </Content>
    </Container>
  )
}

export default Register;