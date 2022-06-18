import React, { useState, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";
//import { toast } from "react-toastify";
import * as Yup from "yup";
import { Form, Input, Textarea } from "@rocketseat/unform";
import api from "../../../services/api";
import Header from "../../../components/Header";

/*import "../AddNewMachine/style.css";*/
import { ContainerNewMachine, Heading, ContentNewMachine,
         ContentNewMachineFields, LabelFile } from "./style";


const Schema = Yup.object().shape({
  /*machineThumbail: Yup.files(),*/
  machineName: Yup.string(),
  machineParameter: Yup.string(),
  machineManufacture: Yup.string(),
  machineDescription: Yup.string(),
});

function AddNewMachine() {
  const history = useHistory();

  const [machineThumbail, setMachineThumbail] = useState(null);
  const [machineName, setMachineName] = useState('');
  const [machineParameter, setMachineParameter] = useState('');
  const [machineManufacture, setMachineManufacture] = useState('');
  const [machineDescription, setMachineDescription] = useState('');

  const preview = useMemo(() => {
    return machineThumbail ? URL.createObjectURL(machineThumbail) : null;
  }, [machineThumbail]);

  async function handleSubmitNewMachine(event) {

    //event.preventDefault();

    const data = new FormData();

    const user_id = localStorage.getItem("@mmsystem:userID");

    data.append('machineThumbail', machineThumbail);
    data.append('machineName', machineName);
    data.append('machineParameter', machineParameter);
    data.append('machineManufacture', machineManufacture);
    data.append('machineDescription', machineDescription);
    
    const respo = await api.post("/machines", data, {
      headers: { user_id}
    });

    console.log(respo);

    history.push("/dashboard");

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
                className={machineThumbail ? "has-thumbnail" : ""}
              >
                <span>Clique ou arraste o arquivo!</span>
                <Input
                  type="file"
                  name="thumbnail"
                  onChange={(event) =>
                    setMachineThumbail(event.target.files[0])
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
              <div className="btn__save__Machine">
                <Link to="/dashboard" className="btnBack" type="Link">
                  Voltar
                </Link>
                <button className="btnRegister" type="submit">
                  Cadastrar
                </button>
              </div>
            </Form>
          </ContentNewMachineFields>
        </ContentNewMachine>
      </ContainerNewMachine>
    </>
  );
}

export default AddNewMachine;
