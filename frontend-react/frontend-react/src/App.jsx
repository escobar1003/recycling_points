import "./App.css";
import fondo from "./assets/fondo.jpeg";



function App() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="login-box">
        <h2>Bienvenido a recycling points</h2>

        <div className="logo">
          <div className="circle">
            🌿
          </div>
        </div>

        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />

        <div className="buttons">
          <button className="btn-primary">INICIO DE SESIÓN</button>
          <button className="btn-secondary">CREAR CUENTA</button>
        </div>

        <a href="#" className="forgot">
          ¿Olvidaste tu contraseña?
        </a>

        <button className="facebook">FACEBOOK</button>
        <button className="google">GOOGLE</button>
      </div>
    </div>
  );
}

export default App;