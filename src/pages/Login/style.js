import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 450px;
  left: 50%; 
  margin: -130px 0 0 -170px; 
  padding: 1rem;
  position: absolute; 
  top: 35%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    height: 0 auto;

    input{
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      height: 42px;
      border-radius: 5px;
      padding: 1.5rem;
      background: #413D4F;
      border: none;
      outline: none;
      color: #eee;
      font-weight: bold;

      &::placeholder{
        font-size: 1.5rem;
        font-weight: bold;
        color: #666;
      }

      &:focus {
        border: 1px solid #E8643A;
      }
    }

    button {
      width: 100%;
      margin-bottom: 3rem;
      font-size: 1.8rem;
      height: 42px;
      background: #E8643A;
      border-radius: 5px;
      border: 0;
      color: #fff;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background: #963a1e;
        color: #fff;
        /*border: 2px solid #eee;*/
      }
    }

    a {
      text-decoration: none;

      div {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
          width: 35px;
          height: 35px;
        }

        span {
          font-size: 18px;
          color: #fff;

          &:hover {
            color: #E8643A;
          }
        }
      }
    }
 }
`;

export const LogoType = styled.div`
  img {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
`;