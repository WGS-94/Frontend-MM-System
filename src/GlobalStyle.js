import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`

:root {
  font-size: 60%;
}

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
 }

 html, body, #root {
  height: 100%;
}

body {
  /*background: #413D4F;*/
  background: #2C2641;
}

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-500);
}

html, 
input,
button {
  font-family: 700 1.6rem Roboto;
} 

/* Estilos do Modal */
.react-modal-overlay {
  background: rgba(0,0,0,0.6);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: #fff;
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;
}

.has-thumbnail { border: 0; }
.has-thumbnail span { display: none; }


@media (max-width: 768px) {

html {
  font-size: 87.5%;
}

}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;

export default GlobalStyle;