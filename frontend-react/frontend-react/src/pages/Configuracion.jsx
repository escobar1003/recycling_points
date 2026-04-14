import Sidebar from "../components/Sidebar";
import "./recompensas.css";

function Configuracion(){

  return(

    <div className="layout rewards-bg">

      <Sidebar/>

      <div className="content">

        <h2 className="title">
          Configuración ⚙️
        </h2>


        <div className="reward-card">

          <div>
            <h3>Modo oscuro</h3>
            <p>Activar tema oscuro</p>
          </div>

          <button>Activar</button>

        </div>


        <div className="reward-card">

          <div>
            <h3>Notificaciones</h3>
            <p>Recibir avisos</p>
          </div>

          <button>Activar</button>

        </div>


        <div className="reward-card">

          <div>
            <h3>Privacidad</h3>
            <p>Cambiar contraseña</p>
          </div>

          <button>Editar</button>

        </div>


      </div>

    </div>

  )

}

export default Configuracion;