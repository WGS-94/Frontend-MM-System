import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import api from '../../services/api';

import NavBar from '../../components/Header/Nav';
import Transition from '../../components/Transition';

import './Dashboard.css';


function Dashboard() {

  const { user } = useAuth();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function loadData() {

      setLoading(true)

      const user_id = localStorage.getItem("@mmsystem:userID");

      const response = await api.get(`/machines/user/${user_id}`);
      
      
      setData(response.data.machines);
      
    }
    loadData();
    setLoading(false)
  }, []);

  return (
    <div>
      <NavBar />
      <div className='dasboardConteiner'>
        <div className="user__and__addNewMachine">
          <p>Olá <span>{user.name}</span>, seja bem-vindo!</p>
          <Link to="/add-new-machine">Adicionar nova máquina</Link>
        </div>

        
        <div className="main-container">
          <div className="heading">
            <h1 className="heading__title">Machine Monitoring System - MMS</h1>
          </div>

          
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i style={{ fontSize: 30 }} className="fa fa-spinner fa-pulse"></i>
            <span style={{ marginLeft: 5 }}>Carregando as máquinas</span>
          </div>
        )}

          {data.length > 0 ?
            <div className="cards" >
            {data.map((machine) => (
            <div  key={machine._id} className="card card-1">
              <div className="card__content">
                <div className="card__image">
                  <img src={machine.thumbnail_url} alt="machine" />
                </div>
                <div className="card__about">
                  <div className="card__about__product">
                    <h2 className="card__title"><b>Nome:</b> {machine.machineName}</h2>
                    <h2 className="card__title"><b>Parâmetros:</b> {machine.parameter}</h2>
                    <h2 className="card__title"><b>Fabricante:</b> {machine.manufacturer}</h2>
                    <h2 className="card__title"><b>Descrição:</b> {machine.description}</h2>
                    <div className="card__status">
                      <b>{machine.status === true ? "Ativo" : "Desativo"}</b>
                      <span className={ machine.status === true ? "card__title_green" : "card__title_red"}></span>
                    </div>
                  </div>
                  <div className="card__about__btn">
                    <span></span>
                    <div className='card__about__btns'>
                      <button className='btn1'>Editar</button>
                      <button className='btn2'>Excluir</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
          </div>
          : (
            <Transition />
          )}
        </div>


      </div>
    </div>
  )
}

export default Dashboard;