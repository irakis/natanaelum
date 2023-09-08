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
import ProjectActiveCompetent from './pages/ProjectActiveCompetent.js';
import AddictionTraining from './pages/AddictionTraining.js';
import SelectClinic from './pages/SelectClinic.js';
import FormPage from './pages/FormPage.js';

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
        <Route path='/ourprojects/project_active_competent' element={<ProjectActiveCompetent/>}/>
        <Route path='/ourtrainings/addiction_training' element={<AddictionTraining/>}/>
        <Route path='/clinic/select_clinic' element={<SelectClinic/>}/>
        <Route path='/clinic/select_clinic/:id' element={<FormPage/>}/>
        {/*<Route path='*' element={<Error404/>}/>*/}
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
