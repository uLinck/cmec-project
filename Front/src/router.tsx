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

          <Route
            path="calendario/infantil/pre-quinto"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/fundamental/primeiro-ano"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/fundamental/segundo-ano"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/fundamental/terceiro-ano"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/fundamental/quarto-ano"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/fundamental/quinto-ano"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/fundamental/sexto-ano"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/medio/primeiro-ano-medio"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/medio/segundo-ano-medio"
            element={<Cooperativa />}
          />
          <Route
            path="calendario/medio/terceiro-ano-medio"
            element={<Cooperativa />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
