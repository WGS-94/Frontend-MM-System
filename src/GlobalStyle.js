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

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#loading-spinner {
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
}

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