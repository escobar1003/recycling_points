import Sidebar from "../components/Sidebar";
import "./recompensas.css";

function Perfil(){

  return(

    <div className="layout rewards-bg">

      <Sidebar/>

      <div className="content">

        <h2 className="title">
          Mi Perfil 👤
        </h2>


        <div className="points-card">

          <h3>Nombre</h3>
          <p>Diego Usuario</p>

          <h3>Email</h3>
          <p>usuario@email.com</p>

          <h3>Nivel ecológico</h3>
          <p>Avanzado 🌱</p>

        </div>


        <div className="reward-card">

          <div>
            <h3>Puntos actuales</h3>
            <p>2,450 pts</p>
          </div>

          <button>Ver progreso</button>

        </div>


      </div>

    </div>

  )

}

export default Perfil;