import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
`;

export const Button = styled.button`
  position: absolute;
  right: 2rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ModalContent = styled.div`

  p {
    font-size: 1.7rem;
    color: #000;
    margin-bottom: 2rem;
  }

  span {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 2rem;
  }

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    button {
      width: 80px;
      color: #fff;
      padding: 0.8rem;
      border: 0;
      outline: 0;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      background: #1E90FF;

      &:hover {
          background: #6495ED;
          color: #fff;
        }
    }

  }

`;