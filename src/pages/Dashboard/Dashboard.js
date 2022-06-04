import React from 'react';
import { useAuth } from "../../hooks/auth";
//import api from '../../services/api';

import logoImg from '../../img/logo.svg';
import NavBar from '../../components/Header/Nav';

import './Dashboard.css';

function Dashboard() {

  const { user } = useAuth();
  //const [data, setData] = React.useState([]);

  /*React.useEffect(() => {
    async function loadData() {
      const response = await api.get(`/users/${user._id}`);
      setData(response.data);
    }
    loadData();
  }, [user._id]);*/

  return (
    <div>
      <NavBar />
      <div className='dasboardConteiner'>
        <div className="main-container">
          <p>Olá <span>{user.name}</span>, seja bem-vindo!</p>
          <div className="heading">
            <h1 className="heading__title">Machine Monitoring System - MMS</h1>
          </div>
          <div className="cards">
            <div className="card card-1">
              <div className="card__content">
                <div className="card__image">
                  <img src={logoImg} alt="logomark" />
                </div>
                <div className="card__about">
                  <div className="card__about__product">
                    <h2 className="card__title"><b>Nome:</b> Lorem ipsum dolor</h2>
                    <h2 className="card__title"><b>Parâmetros:</b> Velocida, Pressão</h2>
                    <h2 className="card__title"><b>Descrição:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laborum. Officiis porro perferendis consequatur iusto mollitia autem dolorum officia excepturi, consectetur ipsa ipsum soluta. Aut nulla nihil nesciunt et cum!</h2>
                  </div>
                  <div className="card__about__btn">
                    <span></span>
                    <div className='card__about__btns'>
                      <button>Editar</button>
                      <button>Excluir</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-1">
              <div className="card__content">
                <div className="card__image">
                  <img src={logoImg} alt="logomark" />
                </div>
                <div className="card__about">
                  <div className="card__about__product">
                    <h2 className="card__title"><b>Nome:</b> Lorem ipsum dolor</h2>
                    <h2 className="card__title"><b>Parâmetros:</b> Velocida, Pressão</h2>
                    <h2 className="card__title"><b>Descrição:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laborum. Officiis porro perferendis consequatur iusto mollitia autem dolorum officia excepturi, consectetur ipsa ipsum soluta. Aut nulla nihil nesciunt et cum!</h2>
                  </div>
                  <div className="card__about__btn">
                    <span></span>
                    <div className='card__about__btns'>
                      <button>Editar</button>
                      <button>Excluir</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;