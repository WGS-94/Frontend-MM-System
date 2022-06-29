import React, { useState, useMemo, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";
import api from "../../../services/api";

import Header from "../../../components/Header";

import { ContainerNewMachine, Heading, ContentNewMachine,
         ContentNewMachineFields, LabelFile, BtnSaveMachine,
         SaveMachine, IsActiveButtons } from "./style";


const Schema = Yup.object().shape({
  /*machineThumbnail: Yup.files(),*/
  name: Yup.string(),
  parameter: Yup.string(),
  manufacturer: Yup.string(),
  description: Yup.string(),
});

function EditAMachine() {
  const history = useHistory();

  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState('');
  const [parameter, setParameter] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function handleStatusChange(event) {
    setStatus(event.target.value);
  }

  console.log(name)

  useEffect(() => {
    async function getMachine() {
      setLoading(true);

      const machine_id = localStorage.getItem("@mmsystem:machineID");

      var response = await api.get(`machines/${machine_id}`);

      const newData = response.data.machine;

      console.log('Máquina: ', newData.status)

      /*setThumbnail(response.data.machine.thumbnail_url);
      setName(response.data.machine.machineName);
      setParameter(response.data.machine.parameter);
      setManufacturer(response.data.machine.manufacturer);
      setDescription(response.data.machine.description);
      setStatus(response.data.machine.status);*/
      setLoading(false);
    }
    getMachine();
  }, []);

  async function handleSubmitNewMachine(event) {

   // event.preventDefault();

      const machine_id = localStorage.getItem("@mmsystem:machineID");
      
      const response = await api.get(`/machines/${machine_id}`)

      console.log(response);

      toast.success("Máquina atualizada com sucesso");

      history.push("/dashboard");
    
      try {} catch (error) {
      return toast.error("Não foi possível atualizar esta máquina!");
    }

  }

  return (
    <>
      <Header />
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30
          }}
        >
          <i style={{ fontSize: 30, color: '#fff' }} className="fa fa-spinner fa-pulse"></i>
          <span style={{ marginLeft: 5, color: '#fff' }}>Buscando dados da máquina...</span>
        </div>
      )}
      <ContainerNewMachine>
        <Heading>
          <h1>Atualize as informações desta Máquinas</h1>
        </Heading>
        <ContentNewMachine>
          <ContentNewMachineFields>
            <Form schema={Schema} onSubmit={handleSubmitNewMachine}>
              <LabelFile
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? "has-thumbnail" : ""}
              >
                <span>Clique ou arraste o arquivo!</span>
                <Input
                  type="file"
                  name="thumbnail"
                  onChange={(event) =>
                    setThumbnail(event.target.files[0])
                  }
                />
              </LabelFile>
              <Input
                placeholder="Nome da Máquina"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                placeholder="Parâmetros"
                type="text"
                name="parameter"
                id="parameter"
                value={parameter}
                onChange={(event) => setParameter(event.target.value)}
              />
              <Input
                placeholder="Fabricante"
                type="text"
                name="manufacturer"
                id="manufacturer"
                value={manufacturer}
                onChange={(event) => setManufacturer(event.target.value)}
              />
              <textarea
                placeholder="Digite uma descrição da máquina"
                name="description"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <SaveMachine>
                <IsActiveButtons onChange={handleStatusChange}>
                  <input 
                    type="radio" 
                    id="ativo" 
                    name="radioActive" 
                    value={true}
                    />
                  <label htmlFor="ativo">Ativo</label>
                  <input 
                    type="radio" 
                    id="desativo" 
                    name="radioActive" 
                    value={false} 
                    />
                  <label htmlFor="desativo">Inativo</label>
                </IsActiveButtons>
                <BtnSaveMachine>
                  <Link to="/dashboard" className="btnBack" type="Link">
                    Voltar
                  </Link>
                  <button type="submit">
                    Atualizar
                  </button>
                </BtnSaveMachine>
              </SaveMachine>
            </Form>
          </ContentNewMachineFields>
        </ContentNewMachine>
      </ContainerNewMachine>
    </>
  );
}

export default EditAMachine;
