import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Home from "./Pages/Home"
import { PageLayout } from "./Components/PageLayout"
import Instituicao from "./Pages/modulos/Instituicao"
import Cooperativa from "./Pages/modulos/Cooperativa"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modulo" element={<PageLayout />}>
          <Route path="colaboradores/instituicao" element={<Instituicao />} />
          <Route path="colaboradores/cooperativa" element={<Cooperativa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
