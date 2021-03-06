import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import api from '../../services/api';
//import { toast } from 'react-toastify';
import Modal from 'react-modal';
import Header from '../../components/Header';
import Transition from '../../components/Transition';
import RemoveMachineModal from '../../components/RemoveMachineModal';

import { Card, CardAbout, CardAboutButtons, 
         CardAboutMachine, CardContent, Cards, 
         CardStatus, Container, FirstContent, 
         Heading, MainContent, UserAndAddMachine,
       } from './style';


function Dashboard() {

  const { user } = useAuth();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function reload() {
    setTimeout(()=>{
      window.location.reload();
    }, 4000);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    reload();
    
  }

  React.useEffect(() => {
    async function loadData() {

      setLoading(true);
      const user_id = localStorage.getItem("@mmsystem:userID");
      const response = await api.get(`/machines/user/${user_id}`);
      setLoading(false);

      //console.log(response.data.machines)

      setData(response.data.machines);
      
    }
    loadData();
    
  }, []);

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

          {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: '50vh',
                  padding: '0 2rem',
                }}
              >
                <i style={{ fontSize: 30, color: '#eee' }} className="fa fa-spinner fa-pulse"></i>
                <span style={{ fontSize: 16, marginLeft: 5, color: '#eee' }}>Carregando as máquinas</span>
              </div>
            )}

          {data.length >= 0 ?
            <Cards>
            {data.map((machine) => (
            <Card  key={machine._id} className="card card-1">
              <CardContent>
                  <img src={machine.thumbnail_url} alt="machine" />
                <CardAbout>
                  <CardAboutMachine>
                    <p><b>Nome:</b> {machine.name}</p>
                    <p><b>Parâmetros:</b> {machine.parameter}</p>
                    <p><b>Fabricante:</b> {machine.manufacturer}</p>
                    <p><b>Descrição:</b> {machine.description}</p>
                    <CardStatus>
                      <b>{machine.status === true ? "Ativo" : "Inativo"}</b>
                      <span className={ machine.status === true ? "green" : "red"}></span>
                    </CardStatus>
                  </CardAboutMachine>
                  <CardAboutButtons>
                    <span></span>
                    <div>
                      <Link to={`/edit-a-machine/${machine._id}`}>
                        <button 
                          className='btn1'
                          onClick={() => {
                            localStorage.setItem("@mmsystem:machineID", machine._id)
                          }}
                        >
                          Editar
                        </button>
                      </Link>
                      <button 
                        className='btn2'
                        onClick={() => {
                          openModal()
                          localStorage.setItem("@mmsystem:machineID", machine._id)
                        }}
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
      </Container>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
        onHide={reload}
      >
        <RemoveMachineModal onExit={reload} onRequestClose={closeModal} />
      </Modal>
      
    </>
  )
}

export default Dashboard;