import React from 'react';
import closeImg from '../../assets/close.svg';

import { Container, Button, ModalContent } from './style';

function RemoveMachineModal({ onRequestClose }) {

  /*async function handleRemoveMachine() {

    try {
      await api.delete('/machines');
      setLoading(true);

      toast.success("Máquina removida com sucesso");

      setLoading(false);
    } catch (error) {
      //console.log("ERRO", error);
      return toast.error("Não foi possível remover esta máquina");
    }
  }*/

  return (
    <Container>
      <Button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </Button>
      <ModalContent>
        <p>Você tem certeza que deseja remover esta máquina da lista?</p>
        <span>Por favor, confirme abaixo.</span>
        <div>
          <button onClick={onRequestClose}>Não</button>
          <button>Sim</button>
        </div>
      </ModalContent>
    </Container>
  )
}

export default RemoveMachineModal;