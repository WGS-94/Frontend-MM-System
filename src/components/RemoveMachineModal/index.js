import React from 'react';
import { toast } from 'react-toastify';
import closeImg from '../../assets/close.svg';
import api from '../../services/api';

import { Container, Button, ModalContent } from './style';

function RemoveMachineModal({ onRequestClose }) {

  async function handleRemoveMachine() {

    const machineID = localStorage.getItem("@mmsystem:machineID");

    try {
      await api.delete(`/machines/${machineID}`);

      toast.success("Máquina removida com sucesso");

    } catch (error) {
      //console.log("ERRO", error);
      return toast.error("Não foi possível remover esta máquina");
    }
  }

  return (
    <Container>
      <Button
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </Button>
      <ModalContent>
        <p>Você tem certeza que deseja remover esta máquina da lista?</p>
        <span>Por favor, confirme abaixo.</span>
        <div>
          <button onClick={onRequestClose}>Não</button>
          <button
            onClick={() => {handleRemoveMachine(); onRequestClose()} }>Sim</button>
        </div>
      </ModalContent>
    </Container>
  )
}

export default RemoveMachineModal;