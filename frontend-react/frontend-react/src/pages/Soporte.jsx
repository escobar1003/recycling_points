import Sidebar from "../components/Sidebar";
import "./recompensas.css";

function Soporte(){

  return(

    <div className="layout rewards-bg">

      <Sidebar/>

      <div className="content">

        <h2 className="title">
          Soporte ❓
        </h2>


        <div className="points-card">

          <h3>¿Necesitas ayuda?</h3>

          <p>
            Puedes contactarnos en:
          </p>

          <p>
            soporte@recyclingpoints.com
          </p>

        </div>


        <div className="reward-card">

          <div>
            <h3>Preguntas frecuentes</h3>
            <p>¿Cómo ganar puntos?</p>
          </div>

          <button>Ver</button>

        </div>


      </div>

    </div>

  )

}

export default Soporte;