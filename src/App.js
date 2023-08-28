import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Home from './components/Home.js';
import Container from './components/Layout/Container.js';

function App() {
  
  return (
    <Container>
      <Header/>
      <Home/>
      <Footer/>
    </Container>
  );
}

export default App;
