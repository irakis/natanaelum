import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Home from './components/Home.js';
import About from './pages/About.js';
import Container from './components/layout/Container.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/*<Route path='*' element={<Error404/>}/>*/}
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
