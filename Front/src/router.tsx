import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import { PageLayout } from "./Components/PageLayout";
import Instituicao from "./Pages/Modulos/Colaboradores/Instituicao";
import Cooperativa from "./Pages/Modulos/Colaboradores/Cooperativa";
import { PrimeiroAno } from "./Pages/Modulos/Calendario/Fundamental/PrimeiroAno";
import { SegundoAno } from "./Pages/Modulos/Calendario/Fundamental/SegundoAno";
import { TerceiroAno } from "./Pages/Modulos/Calendario/Fundamental/TerceiroAno";
import { QuartoAno } from "./Pages/Modulos/Calendario/Fundamental/QuartoAno";
import { QuintoAno } from "./Pages/Modulos/Calendario/Fundamental/QuintoAno";
import { SextoAno } from "./Pages/Modulos/Calendario/Fundamental/SextoAno";
import { Infantil } from "./Pages/Modulos/Calendario/Infantil";
import { Header } from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing">
          <Route path="header" element={<Header />} />
        </Route>

        <Route path="/modulo" element={<PageLayout />}>
          <Route path="colaboradores/instituicao" element={<Instituicao />} />
          <Route path="colaboradores/cooperativa" element={<Cooperativa />} />

          <Route path="calendario/infantil/pre-quinto" element={<Infantil />} />
          <Route
            path="calendario/fundamental/primeiro-ano"
            element={<PrimeiroAno />}
          />
          <Route
            path="calendario/fundamental/segundo-ano"
            element={<SegundoAno />}
          />
          <Route
            path="calendario/fundamental/terceiro-ano"
            element={<TerceiroAno />}
          />
          <Route
            path="calendario/fundamental/quarto-ano"
            element={<QuartoAno />}
          />
          <Route
            path="calendario/fundamental/quinto-ano"
            element={<QuintoAno />}
          />
          <Route
            path="calendario/fundamental/sexto-ano"
            element={<SextoAno />}
          />

          <Route
            path="calendario/medio/primeiro-ano-medio"
            element={<PrimeiroAno />}
          />
          <Route
            path="calendario/medio/segundo-ano-medio"
            element={<PrimeiroAno />}
          />
          <Route
            path="calendario/medio/terceiro-ano-medio"
            element={<PrimeiroAno />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
