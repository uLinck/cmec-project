import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import ExamplePage from './Pages/Example';


function App() {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
