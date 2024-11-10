import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Doc from './Pages/Templates/DocTemplate';
import { Box } from '@mui/material';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={
          <Box sx={{ height: '100vh', width: '80vw', marginLeft: '20vw', maxWidth: '100vw' }}>
            <Doc category='Testes' title='Teste 1' description='Teste realizado por macacos'>
              <Box>Cuzinho!!!!</Box>
            </Doc>
          </Box>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
