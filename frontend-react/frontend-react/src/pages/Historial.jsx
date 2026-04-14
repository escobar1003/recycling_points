import Sidebar from "../components/Sidebar";
import "./recompensas.css";

function Historial(){

  return(

    <div className="layout rewards-bg">

      <Sidebar/>

      <div className="content">

        <h2 className="title">
          Historial de reciclaje 📊
        </h2>


        <div className="reward-card">

          <div>
            <h3>Botellas recicladas</h3>
            <p>12 marzo 2026</p>
          </div>

          <span>+50 pts</span>

        </div>


        <div className="reward-card">

          <div>
            <h3>Papel reciclado</h3>
            <p>10 marzo 2026</p>
          </div>

          <span>+30 pts</span>

        </div>


        <div className="reward-card">

          <div>
            <h3>Cartón reciclado</h3>
            <p>5 marzo 2026</p>
          </div>

          <span>+40 pts</span>

        </div>


      </div>

    </div>

  )

}

export default Historial;