import React from 'react';
import { Form, Input } from "@rocketseat/unform";
import Header from '../../../components/Header/Nav';

import '../AddNewMachine/style.css';

function AddNewMachine() {

  function handleSubmitNewMachine() {

  }
  
  return (
    <>
      <Header />
      <div className='container__newMachine'>
        <div className="heading">
          <h1 className="heading__title">Cadastro de uma nova Máquina</h1>
        </div>
        <div className="content__newMachine">

          <div className="content__newMachine__fields">
            <Form onSubmit={handleSubmitNewMachine}>
              <label htmlFor="">Nome da Máquina: </label>
              <Input type="text" />
              <label htmlFor="">Parâmetro</label>
              <Input type="text" />
              <label htmlFor="">Fabricante</label>
              <Input type="text" />
              <label htmlFor="">Descrição</label>
              <textarea name="" id="" />
            </Form>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddNewMachine;