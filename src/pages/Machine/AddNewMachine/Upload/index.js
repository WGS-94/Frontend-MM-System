import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import styled, { css } from 'styled-components';



const dragActive = css`
  border-color: #e57878;
`;

const dragReject = css`
  border-color: #78e5d5;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  /*border: 1px dashed #555555;*/
  border: 1px solid #555555;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-left: 9.5%;
  height: 120px;
  outline: 0;
  background: #f2f2f2;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
}

const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  height: 100%;
`;



export default class Upload extends Component {

  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) {
      return <UploadMessage>Clique ou Arraste aqui para adicionar arquivos</UploadMessage>;
    }
    if(!isDragReject) {
      return <UploadMessage type="error">Aqruivo não Suportado</UploadMessage>;
    }
    return <UploadMessage type="success">Arraste os seus arquivos aqui</UploadMessage>;
  };
  render() {
    return (
      <Dropzone accept="/*">
        { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer { ...getRootProps()} 
                       isDragActive={isDragActive}
                       isDragReject={isDragReject}>
          <input { ...getInputProps()} />
          {this.renderDragMessage(isDragActive, isDragReject)}
        </DropContainer> 
        )}
      </Dropzone>
    );
  }
}
