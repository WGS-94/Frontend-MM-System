import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
//import { Form, Input } from "@rocketseat/unform";
import api from '../../../services/api';
import Header from '../../../components/Header/Nav';

import '../AddNewMachine/style.css';

function AddNewMachine() {

  const [machineThumbail, setMachineThumbail] = useState(null);
  const [machineName, setMachineName] = useState('');
  const [machineParameter, setMachineParameter] = useState('');
  const [machineManufacture, setMachineManufacture] = useState('');
  const [machineDescription, setMachineDescription] = useState('');
  
  const preview = useMemo(() => {
    return machineThumbail ? URL.createObjectURL(machineThumbail) : null;
  }, [machineThumbail]);

  async function handleSubmitNewMachine({machineThumbail, machineName, machineParameter, machineManufacture, machineDescription}) {

    const response = api.post('/machines')
    console.log({machineThumbail, machineName, machineParameter, machineManufacture, machineDescription})
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
              <label 
                id="thumbnail" 
                style={{ backgroundImage: `url(${preview})`}}
                className={machineThumbail ? 'has-thumbnail' : ''}
              >
                <span>Clique ou arraste o arquivo!</span>
                <input 
                  type="file"
                  onChange={(event) => setMachineThumbail(event.target.files[0])}
                />
              </label>
              <label htmlFor="machineName">Nome da Máquina: </label>
                <input 
                  type="text"
                  id="machineName"
                  value={machineName}
                  required 
                  onChange={(event) => setMachineName(event.target.value)}
                />
              <label htmlFor="machineParameter">Parâmetros</label>
                <input 
                  type="text" 
                  id="machineParameter"
                  value={machineParameter}
                  required
                  onChange={(event) => setMachineParameter(event.target.value)}
                />
              <label htmlFor="">Fabricante</label>
                <input 
                  type="text" 
                  id="machineManufacture"
                  value={machineManufacture}
                  required
                  onChange={(event) => setMachineManufacture(event.target.value)}
                />
              <label htmlFor="machineDescription">Descrição</label>
                <textarea  
                  placeholder='Digite uma descrição da máquina' 
                  name="machineDescription"
                  id="machineDescription"
                  value={machineDescription}
                  required
                  onChange={(event) => setMachineDescription(event.target.value)}
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