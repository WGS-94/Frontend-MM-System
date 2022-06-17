import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  padding: 3rem 1rem;
  /*border: 1px solid #fff;*/
`;

export const FirstContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserAndAddMachine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  p {
    font-size: 18px;
    color: #E8643A;
  }

  span {
    color: #eee;
  }

  a {
    width: 200px;
    height: 40px;
    font-size: 14px;
    background: #43B05C;
    color: #fff;
    border-radius: 5px;
    border: 0;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #4ac466;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 2rem;
    }
    
  }
`;

export const Heading = styled.div`
  text-align: center;

  h1 {
    font-weight: 600;
    color: #fff;
    margin: 2rem;
  }
`;

export const MainContent = styled.div`
  margin: 0 auto;
`;

export const Cards = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  grid-gap: 1rem;

  /*border: 1px solid #fff;*/

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns:  1fr; 
  }
`;

export const Card = styled.div`
  padding: 2rem;
  height: 25rem;
  background: #413D4F;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;

`;

export const  CardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  img {
    width: calc(20rem + 12px);
    height: calc(20rem + 2px);
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid #fff;
    outline: 4px solid #E8643A;
  }

  
  @media (max-width: 768px) {
   
  }
`; 

export const CardAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardAboutMachine = styled.div`
  width: 100%;

  /*border: 1px solid #fff;*/

  h2 {
    margin-bottom: 2px;
    color: #b9b9b9;
    font-size: 2.2vmin;
  }

  b {
    color: #ffffff;
    font-size: 2.2vmin;
  }
`;

export const CardStatus = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 5px;

  b {
    color: #ffffff;
    font-size: 2.2vmin;
  }

  span {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
  }

  span.green {
      background: green;
      
    }

  span.red {
    background: red;
  }
`;

export const CardAboutButtons = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    gap: 1rem;

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
    }

    button.btn1 {
      background: #E8643A;
      margin-right: 6px;

      &:hover {
          background: #963a1e;
          border: 1px solid #eee;
        }
    }

    button.btn2 {
      background: #CA2626;

      &:hover {
          background: #bd2323;
          border: 1px solid #eee;
        }
    }
  }
`;