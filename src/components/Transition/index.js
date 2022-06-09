import React from 'react';
import { Link } from 'react-router-dom';

import clipBoardImg from '../../assets/Clipboard.svg';

import { Container } from './style.js';

function Transition() {
  return (
    <Container>
      <img src={clipBoardImg } alt="" />
      <p>Nenhuma máquina cadastrada!</p>
      <span>Clique no botão acima ou neste link <Link to="/add-new-machine"> adicnionar nova máquina</Link></span>
    </Container>
  )
}

export default Transition;