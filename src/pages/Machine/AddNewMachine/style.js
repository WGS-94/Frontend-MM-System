import styled from "styled-components";

export const ContainerNewMachine = styled.div`
  padding: 2rem;
  height: 0 auto;

  /*border: 1px solid #fff;*/
`;

export const Heading = styled.div`  
  text-align: center;
  padding: 1rem;
  
  /*border: 1px solid red;*/

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
 }
`;

export const ContentNewMachine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /*border: 1px solid #fff;*/
`;

export const ContentNewMachineFields = styled.div`
  width: 700px;
  height: auto;
  background: #413D4F;
  border-radius: 5px;

  /*border: 1px solid #fff;*/

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      margin-bottom: 10px;
      /*border: 1px solid #E8643A;*/
      font-size: 15px;
      height: 42px;
      border-radius: 5px;
      padding: 0 15px;
      background: #2C2641;
      border: none;
      outline: none;
      color: #eee;
      font-weight: bold;

      &:focus {
         border: 1px solid #E8643A;
      }
    }

    textarea {
      width: 100%;
      margin-bottom: 10px;
      background: #2C2641;
      border: 0;
      outline: 0;
      resize: none;
      height: 8rem;
      padding: 1rem;
      border-radius: 5px;
      color: #eee;
      line-height: 1.4;
      font-weight: bold;
      font-size: 15px;

      &:focus {
         border: 1px solid #E8643A;
      }
    }
  }

`;

export const LabelFile = styled.label`
  margin-bottom: 1.5rem;
  border: 1px dashed #ddd;
  background: #2C2641;
  background-size: cover;
  cursor: pointer;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  input {
    display: none;
  }

 span {
    color: #ddd;
    font-size: 16px;
  }
  
`;


export const BtnSaveMachine = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    width: 120px;
    margin-top: 10px;
    font-size: 16px;
    height: 42px;
    background: #6E4BF8;
    border-radius: 6px;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    &:hover {
      background: #8a75df;
    }
  }

  button {
    width: 120px;
    margin-top: 10px;
    font-size: 16px;
    height: 42px;
    background: #E8643A;
    border-radius: 6px;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #963a1e;
      color: #fff;
    }
  }
`;