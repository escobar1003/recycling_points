import Sidebar from "../components/Sidebar";
import "./recompensas.css";

function Recompensas(){

  return(

    <div className="layout rewards-bg">

      <Sidebar/>

      <div className="content">

        <h2 className="title">
          Recompensas Disponibles ♻️
        </h2>


        {/* tarjeta puntos */}
        <div className="points-card">

          <h3>Tus Puntos Totales</h3>

          <h1>2,450 pts</h1>

          <p>+180 pts esta semana 🌱</p>

        </div>


        {/* stats */}
        <div className="stats">

          <div className="card">
            <h2>124</h2>
            <p>Botellas</p>
          </div>

          <div className="card">
            <h2>89</h2>
            <p>Papel</p>
          </div>

          <div className="card">
            <h2>56</h2>
            <p>Cartón</p>
          </div>

        </div>


        {/* lista recompensas */}

        <div className="reward-card">

          <div>
            <h3>20% Descuento en Ropa</h3>
            <p>500 pts</p>
          </div>

          <button>Canjear</button>

        </div>


        <div className="reward-card">

          <div>
            <h3>15% Descuento en Comida</h3>
            <p>400 pts</p>
          </div>

          <button>Canjear</button>

        </div>


        <div className="reward-card">

          <div>
            <h3>Cine 2x1</h3>
            <p>600 pts</p>
          </div>

          <button>Canjear</button>

        </div>

      </div>

    </div>

  )

}

export default Recompensas;