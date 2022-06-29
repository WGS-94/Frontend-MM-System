import React from 'react';
import { toast } from "react-toastify";
import { Form, Input } from "@rocketseat/unform";
import { Link, useHistory } from "react-router-dom";
import logoImg from '../../assets/logo.svg';
import RegisterIcon from '../../assets/registo.svg';
import * as Yup from "yup";
import { useAuth } from "../../hooks/auth";
import { Container, Content, LogoType } from './style';

// Validation .email("Email Inválido").required("E-mail é obrigatório")
const Schema = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string()
});

function Login() {

  const history = useHistory();
  const { signIn, loading, setLoading } = useAuth();
  //const [hiddenPassword, setHiddenPassord] = useState(true)

   async function handleSubmit({ email, password }) {

   // event.preventDefault()
    if (!email || !password ) {
      return toast.error("Não foi possível fazer login. Preencha todos os campos corretamente!");
    }

   //console.log(email, password)

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

       /*localStorage.setItem('@mmsystem:userID', response.data.token)
     console.log('token', response.data.token)*/

      history.push("/dashboard");

      toast.success(`Bem vindo, Login efetuado com sucesso!`);
    } catch (error) {
      setLoading(false)
      toast.error("Senha ou E-mail incorretos!");
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
            type="email" 
            name="email" 
            id="email" 
            placeholder="E-mail"
          />
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Password"
          />
          <button type="submit">
            {loading ? <i style={{ fontSize: 20 }} className="fa fa-spinner fa-pulse"/> : 'Entrar' }
          </button>
          <Link to="/register">
            <div>
              <img src={RegisterIcon} color="#fff" alt="Envelope" /> 
              <span>Cadastrar E-mail</span>
            </div>
          </Link>
        </Form>
      </Content>
    </Container>
  )
}

export default Login;