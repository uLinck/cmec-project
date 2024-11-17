import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import { PageLayout } from "./Components/PageLayout";
import Instituicao from "./Pages/modulos/Instituicao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modulo" element={<PageLayout />}>
          <Route path="instituicao" element={<Instituicao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
