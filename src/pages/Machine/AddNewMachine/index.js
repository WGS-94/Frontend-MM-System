import React from 'react';
import { Link } from 'react-router-dom';
//import { Form, Input } from "@rocketseat/unform";
import Header from '../../../components/Header/Nav';

import '../AddNewMachine/style.css';

function AddNewMachine() {

  function handleSubmitNewMachine(event) {
    console.log(event)
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
            <form onSubmit={handleSubmitNewMachine}>
              <label id="thumbnail" htmlFor="file">
                <span>Clique ou arraste o arquivo!</span>
                <input type="file" id="file" />
              </label>
              <label htmlFor="">Nome da Máquina: </label>
              <input type="text" />
              <label htmlFor="">Parâmetros</label>
              <input type="text" />
              <label htmlFor="">Fabricante</label>
              <input type="text" />
              <label htmlFor="">Descrição</label>
              <textarea  
                placeholder='Digite uma descrição da máquina' 
                name="comment"
                id=""
              />
              <div className="btn__save__Machine">
                <Link to='/dashboard' className="btnBack" type="Link">
                  Voltar
                </Link>
                <button className="btnRegister" type="submit">
                  Cadastrar
                </button>
              </div>
              
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddNewMachine;