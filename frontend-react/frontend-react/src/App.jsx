import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* paginas principales */
import Home from "./pages/Home";
import RecyclingRegister from "./Registro";
import Login from "./Login";
import HomeMap from "./pages/HomeMap";
import Recompensas from "./pages/Recompensas";

/* paginas del menu */
import Perfil from "./pages/Perfil";
import Historial from "./pages/Historial";
import Configuracion from "./pages/Configuracion";
import Soporte from "./pages/Soporte";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* principales */}
        <Route path="/" element={<Home />} />

        <Route path="/registro" element={<RecyclingRegister />} />

        <Route path="/login" element={<Login />} />

        <Route path="/mapa" element={<HomeMap />} />

        <Route path="/recompensas" element={<Recompensas />} />


        {/* menu hamburguesa */}
        <Route path="/perfil" element={<Perfil />} />

        <Route path="/historial" element={<Historial />} />

        <Route path="/configuracion" element={<Configuracion />} />

        <Route path="/soporte" element={<Soporte />} />


      </Routes>

    </BrowserRouter>

  );

}

export default App;