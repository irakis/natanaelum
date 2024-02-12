import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Home from './components/Home.js';
import About from './pages/About.js';
import MainContainer from './components/layout/MainContainer.js';
import { Routes, Route } from 'react-router-dom';
import OurTeam from './pages/OurTeam.js';
import OurProjects from './pages/OurProjects.js';
import OurTrainings from './pages/OurTrainings.js';
import Clinic from './pages/Clinic.js';
import ProjectActiveCompetent from './pages/ProjectActiveCompetent.js';
import AddictionTraining from './pages/addiction-training/AddictionTraining.js';
import SelectClinic from './pages/SelectClinic.js';
import FormPage from './pages/form-page/FormPage.js';
import SummarySite from './pages/SummarySite.js';
import AddictionTrainingFamily from './pages/addiction-training/AddictionTrainingFamily.js'

function App() {
  
  return (
    <MainContainer>
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
        <Route path='/ourtrainings/addiction_training_family' element={<AddictionTrainingFamily/>}/>
        <Route path='/clinic/select_clinic' element={<SelectClinic/>}/>
        <Route path='/clinic/select_clinic/:id' element={<FormPage/>}/>
        <Route path='/clinic/summary' element={<SummarySite/>}/>
        {/*<Route path='*' element={<Error404/>}/>*/}
      </Routes>
      <Footer/>
    </MainContainer>
  );
}

export default App;
