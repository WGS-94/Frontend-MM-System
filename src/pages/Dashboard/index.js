import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import api from '../../services/api';
import { toast } from 'react-toastify';
import Header from '../../components/Header/Nav';
import Transition from '../../components/Transition';

//import './Dashboard.css';

import { Card, CardAbout, CardAboutButtons, CardAboutMachine, CardContent, Cards, CardStatus, Container, FirstContent, Heading, MainContent, UserAndAddMachine } from './style';


function Dashboard() {

  const { user } = useAuth();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function loadData() {

      setLoading(true)

      const user_id = localStorage.getItem("@mmsystem:userID");

      const response = await api.get(`/machines/user/${user_id}`);

      setLoading(false)

      //console.log(response.data.machines)

      setData(response.data.machines);
      
    }
    loadData();
    
  }, []);

  async function handleRemoveMachine() {

    try {
      /*await api.delete('/machines');
      setLoading(true);

      toast.success("Máquina removida com sucesso");

      setLoading(false);*/
    } catch (error) {
      //console.log("ERRO", error);
      return toast.error("Não foi possível remover esta máquina");
    }
  }

  return (
    <>
      <Header />
      <Container>
        <FirstContent>
          <UserAndAddMachine>
            <p>Olá <span>{user.name}</span>, seja bem-vindo!</p>
            <Link to="/add-new-machine">Adicionar nova máquina</Link>
          </UserAndAddMachine>
          <Heading>
            <h1 className="heading__title">Machine Monitoring System - MMS</h1>
          </Heading>
        </FirstContent>
        
        <MainContent>
        
          {data.length > 0 ?
            <Cards>
            {data.map((machine) => (
            <Card  key={machine._id} className="card card-1">
              <CardContent>
                  <img src={machine.thumbnail_url} alt="machine" />
                <CardAbout>
                  <CardAboutMachine>
                    <h2><b>Nome:</b> {machine.machineName}</h2>
                    <h2><b>Parâmetros:</b> {machine.parameter}</h2>
                    <h2><b>Fabricante:</b> {machine.manufacturer}</h2>
                    <h2><b>Descrição:</b> {machine.description}</h2>
                    <CardStatus>
                      <b>{machine.status === true ? "Ativo" : "Desativo"}</b>
                      <span className={ machine.status === true ? "green" : "red"}></span>
                    </CardStatus>
                  </CardAboutMachine>
                  <CardAboutButtons>
                    <span></span>
                    <div>
                      <button className='btn1'>Editar</button>
                      <button 
                        className='btn2'
                        onClick={() => {handleRemoveMachine()}}
                      >
                        Excluir
                      </button>
                    </div>
                  </CardAboutButtons>
                </CardAbout>
              </CardContent>
            </Card>

          ))}
          </Cards>
          : (
            <Transition />
          )}
        </MainContent>

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

      </Container>
    </>
  )
}

export default Dashboard;