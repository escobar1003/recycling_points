import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecyclingRegister from "./Registro";
import Login from "./Login";
import HomeMap from "./pages/HomeMap"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal que ya tenían */}
        <Route path="/" element={<Home />} />

        {/* Registro */}
        <Route path="/registro" element={<RecyclingRegister />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* NUEVA PÁGINA MAPA */}
        <Route path="/mapa" element={<HomeMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;