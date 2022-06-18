import React, { useState, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Form, Input, Textarea } from "@rocketseat/unform";
import api from "../../../services/api";
import Header from "../../../components/Header";

/*import "../AddNewMachine/style.css";*/
import { ContainerNewMachine, Heading, ContentNewMachine,
         ContentNewMachineFields, LabelFile, BtnSaveMachine } from "./style";


const Schema = Yup.object().shape({
  /*machineThumbnail: Yup.files(),*/
  machineName: Yup.string(),
  machineParameter: Yup.string(),
  machineManufacture: Yup.string(),
  machineDescription: Yup.string(),
});

function AddNewMachine() {
  const history = useHistory();

  const [machineThumbnail, setMachineThumbnail] = useState(null);
  const [machineName, setMachineName] = useState('');
  const [machineParameter, setMachineParameter] = useState('');
  const [machineManufacture, setMachineManufacture] = useState('');
  const [machineDescription, setMachineDescription] = useState('');

  const preview = useMemo(() => {
    return machineThumbnail ? URL.createObjectURL(machineThumbnail) : null;
  }, [machineThumbnail]);

  async function handleSubmitNewMachine(event) {

    //event.preventDefault();

    try {

      const data = new FormData();

      const user_id = localStorage.getItem("@mmsystem:userID");

      data.append('machineThumbnail', machineThumbnail);
      data.append('machineName', machineName);
      data.append('machineParameter', machineParameter);
      data.append('machineManufacture', machineManufacture);
      data.append('machineDescription', machineDescription);
      
      const respo = await api.post("/machines", data, {
        headers: { user_id}
      });

      console.log(respo);

      toast.success("Usuário cadastrado com sucesso");

      history.push("/dashboard");
      
    } catch (error) {
      return toast.error("Não foi possível cadastrar. Este usuário já existe!");
    }

  }

  return (
    <>
      <Header />
      <ContainerNewMachine>
        <Heading>
          <h1>Cadastro de uma nova Máquina</h1>
        </Heading>
        <ContentNewMachine>
          <ContentNewMachineFields>
            <Form schema={Schema} onSubmit={handleSubmitNewMachine}>
              <LabelFile
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={machineThumbnail ? "has-thumbnail" : ""}
              >
                <span>Clique ou arraste o arquivo!</span>
                <Input
                  type="file"
                  name="thumbnail"
                  onChange={(event) =>
                    setMachineThumbnail(event.target.files[0])
                  }
                />
              </LabelFile>
              <Input
                placeholder="Nome da Máquina"
                type="text"
                name="machineName"
                id="machineName"
                value={machineName}
                onChange={(event) => setMachineName(event.target.value)}
              />
              <Input
                placeholder="Parâmetros"
                type="text"
                name="machineParameter"
                id="machineParameter"
                value={machineParameter}
                onChange={(event) => setMachineParameter(event.target.value)}
              />
              <Input
                placeholder="Fabricante"
                type="text"
                name="machineManufacture"
                id="machineManufacture"
                value={machineManufacture}
                onChange={(event) => setMachineManufacture(event.target.value)}
              />
              <Textarea
                placeholder="Digite uma descrição da máquina"
                name="machineDescription"
                id="machineDescription"
                value={machineDescription}
                onChange={(event) => setMachineDescription(event.target.value)}
              />
              <BtnSaveMachine>
                <Link to="/dashboard" className="btnBack" type="Link">
                  Voltar
                </Link>
                <button className="btnRegister" type="submit">
                  Cadastrar
                </button>
              </BtnSaveMachine>
            </Form>
          </ContentNewMachineFields>
        </ContentNewMachine>
      </ContainerNewMachine>
    </>
  );
}

export default AddNewMachine;
