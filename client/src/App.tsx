// client/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import { AppProvider } from './AppContext';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fredoka-font';
  }

  body {
    background-color: #F1F5F9;
  }
`;

const App: React.FC = () => {
  return (
    // <AppProvider>
    <Router>
        <GlobalStyle/>
        <Navbar />
        <div style={{ paddingTop: '60px', display: 'flex' }}>
        <Home></Home>
        </div>
    </Router>
    // </AppProvider>
  );
};

export default App;