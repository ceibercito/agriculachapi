import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button } from '@mui/material';
import { NavBar } from './common/NavBar';


function App() {
  return (
    <div>
      <NavBar />      
      <Container sx={{mt: 9}} maxWidth="xl">
        <Button fullWidth variant="contained">Agricola Chapi</Button>
      </Container>
    </div>
    
  );
}

export default App;
