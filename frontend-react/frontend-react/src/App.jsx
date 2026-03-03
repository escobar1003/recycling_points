import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecyclingRegister from "./Registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<RecyclingRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;