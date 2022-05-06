import React from 'react';
import './Dashboard.css';

import logoImg from '../../img/logo.svg';
import NavBar from '../../components/Header/Nav'

function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className='dasboardConteiner'>
        <div class="main-container">
          <div class="heading">
            <h1 class="heading__title">Machine Monitoring System - MMS</h1>
          </div>
          <div class="cards">
            <div class="card card-1">
              <div class="card__content">
                <div className="card__image">
                  <img src={logoImg} alt="logomark" />
                </div>
                <div className="card__about">
                  <div className="card__about__product">
                    <h2 class="card__title"><b>Nome:</b> Lorem ipsum dolor</h2>
                    <h2 className="card__title"><b>Parâmetros:</b> Velocida, Pressão</h2>
                    <h2 className="card__title"><b>Descrição:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laborum. Officiis porro perferendis consequatur iusto mollitia autem dolorum officia excepturi, consectetur ipsa ipsum soluta. Aut nulla nihil nesciunt et cum!</h2>
                  </div>
                  <div className="card__about__btn">
                    <span>x</span>
                    <div>
                      <button>Editar</button>
                      <button>Excluir</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-2">
              <div class="card__icon"><i class="fas fa-bolt"></i></div>
              <p class="card__exit"><i class="fas fa-times"></i></p>
              <h2 class="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;