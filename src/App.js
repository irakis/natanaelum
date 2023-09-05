import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Home from './components/Home.js';
import About from './pages/About.js';
import Container from './components/layout/Container.js';
import { Routes, Route } from 'react-router-dom';
import OurTeam from './pages/OurTeam.js';
import OurProjects from './pages/OurProjects.js';
import OurTrainings from './pages/OurTrainings.js';
import Clinic from './pages/Clinic.js';

function App() {
  
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ourteam' element={<OurTeam/>}/>
        <Route path='/ourprojects' element={<OurProjects/>}/>
        <Route path='/ourtrainings' element={<OurTrainings/>}/>
        <Route path='/clinic' element={<Clinic/>}/>
        {/*<Route path='*' element={<Error404/>}/>*/}
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
