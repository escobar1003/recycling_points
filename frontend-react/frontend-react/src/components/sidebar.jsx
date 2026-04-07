import { Link } from "react-router-dom";
import { 
  FaBars, 
  FaGift, 
  FaMapMarkedAlt, 
  FaHome,
  FaUser,
  FaHistory,
  FaCog,
  FaQuestionCircle
} from "react-icons/fa";

import { useState } from "react";

function Sidebar(){

  const [open, setOpen] = useState(true);

  return(

    <div className={`sidebar ${open ? "open" : "closed"}`}>

      <button 
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        <FaBars/>
      </button>

      <nav>

        {/* inicio */}
        <Link to="/">
          <FaHome/>
          {open && <span>Inicio</span>}
        </Link>

        {/* mapa */}
        <Link to="/mapa">
          <FaMapMarkedAlt/>
          {open && <span>Mapa</span>}
        </Link>

        {/* recompensas */}
        <Link to="/recompensas">
          <FaGift/>
          {open && <span>Recompensas</span>}
        </Link>

        {/* perfil */}
        <Link to="/perfil">
          <FaUser/>
          {open && <span>Perfil</span>}
        </Link>

        {/* historial */}
        <Link to="/historial">
          <FaHistory/>
          {open && <span>Historial</span>}
        </Link>

        {/* configuracion */}
        <Link to="/configuracion">
          <FaCog/>
          {open && <span>Configuración</span>}
        </Link>

        {/* soporte */}
        <Link to="/soporte">
          <FaQuestionCircle/>
          {open && <span>Soporte</span>}
        </Link>

      </nav>

    </div>

  )

}

export default Sidebar;