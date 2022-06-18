import styled from "styled-components";

export const ContainerNewMachine = styled.div`
  padding: 1rem;

  border: 1px solid #fff;
`;

export const Heading = styled.div`
  text-align: center;

  h1 {
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
 }
`;

export const ContentNewMachine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #fff;
`;

export const ContentNewMachineFields = styled.div`
  width: 600px;
  height: auto;
  background: #413D4F;
  border-radius: 5px;

  border: 1px solid #fff;

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      margin-bottom: 10px;
      /*border: 1px solid #E8643A;*/
      font-size: 15px;
      height: 40px;
      border-radius: 6px;
      padding: 0 15px;
      background: #2C2641;
      border: none;
      outline: none;
      color: #eee;
      font-weight: bold;
    }

    textarea {
      width: 100%;
      margin-bottom: 10px;
      background: #2C2641;
      border: 0;
      outline: 0;
      resize: none;
      height: 7rem;
      padding: 1rem;
      border-radius: 6px;
      color: #eee;
      line-height: 1.4;
      font-weight: bold;
      font-size: 15px;
    }
  }

`;

export const LabelFile = styled.label``;


export const LabelInputs = styled.label`
  display: inline-block;
  position: relative;
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;