import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import MainLayout from './components/MainLayout.js';

function App() {
  
  return (
    <MainLayout>
      <Container>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello Natanaelum !!
            </p>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}

export default App;
