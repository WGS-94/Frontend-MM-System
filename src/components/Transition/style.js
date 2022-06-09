import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem;
  height: 300px;

  /*border: 1px solid #fff;*/

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2rem;
    color: #666;
    font-weight: bold;
    margin: 1rem 0;
    line-height: 1.6;
  }

  span {
    font-size: 1.3rem;
    color: #666;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: green;
  }

`;