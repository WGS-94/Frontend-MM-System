import React from 'react';
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/auth";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
       <AuthProvider>
         <Routes />
       </AuthProvider>
       <ToastContainer autoClose={3000} />
       <GlobalStyle />
    </Router>
    
  );
}

export default App;
