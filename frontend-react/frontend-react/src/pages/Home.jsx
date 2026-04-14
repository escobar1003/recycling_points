import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaBars, FaRecycle, FaStore, FaGift, FaHistory, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const points = [
  {
    name: "Supermercado Central",
    position: [4.6097, -74.0817],
    materials: "Plástico, Vidrio, Cartón",
    hours: "8:00 AM - 10:00 PM",
    distance: "0.5 km"
  },
  {
    name: "Supermercado Express",
    position: [4.6060, -74.0750],
    materials: "Plástico, Metal",
    hours: "7:00 AM - 11:00 PM",
    distance: "1.2 km"
  }
];

export default function HomeMap() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (

    <div style={{
      fontFamily: "Segoe UI",
      background: "#f4f6f8",
      minHeight: "100vh"
    }}>

      {/* HEADER */}
      <div style={{
        background: "#1B5E20",
        color: "white",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>

        <FaBars
          size={22}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: "pointer" }}
        />

        <h2 style={{ margin: 0 }}>
          RecyclingPoints ♻️
        </h2>

        <div />

      </div>


      {/* MENU HAMBURGUESA */}
      {menuOpen && (

        <div style={{
          position: "absolute",
          top: 60,
          left: 0,
          width: "220px",
          background: "white",
          boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
          padding: "20px",
          zIndex: 1000
        }}>

          <MenuItem
            icon={<FaRecycle />}
            text="Página Principal"
            onClick={() => navigate("/")}
          />

          <MenuItem
            icon={<FaStore />}
            text="Supermercados"
          />

          <MenuItem
            icon={<FaRecycle />}
            text="Materiales"
          />

          <MenuItem
            icon={<FaGift />}
            text="Recompensas"
            onClick={() => navigate("/recompensas")}
          />

          <MenuItem
            icon={<FaHistory />}
            text="Historial"
          />

          <MenuItem
            icon={<FaHeadset />}
            text="Soporte Técnico"
          />

        </div>

      )}


      {/* MAPA */}
      <MapContainer
        center={[4.6097, -74.0817]}
        zoom={14}
        style={{ height: "300px" }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.map((point, index) => (

          <Marker
            key={index}
            position={point.position}
          >

            <Popup>

              <strong>
                {point.name}
              </strong>

              <br />

              Materiales: {point.materials}

              <br />

              Horario: {point.hours}

            </Popup>

          </Marker>

        ))}

      </MapContainer>


      {/* BOTÓN RECICLA */}
      <div style={{ padding: "15px" }}>

        <button style={{
          width: "100%",
          padding: "15px",
          background: "#2E7D32",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>

          ♻️ Recicla Ahora

        </button>

      </div>


      {/* LISTA DE SUPERMERCADOS */}
      <div style={{ padding: "15px" }}>

        <h3>
          Supermercados Cercanos
        </h3>


        {points.map((point, index) => (

          <div
            key={index}

            style={{
              background: "white",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
            }}
          >

            <h4 style={{ margin: "0 0 5px 0" }}>
              {point.name}
            </h4>


            <p style={{ margin: "0 0 5px 0" }}>
              📍 {point.distance}
            </p>


            <p style={{ margin: "0 0 5px 0" }}>
              ♻️ {point.materials}
            </p>


            <p style={{ margin: 0 }}>
              🕒 {point.hours}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}


function MenuItem({ icon, text, onClick }) {

  return (

    <div
      onClick={onClick}

      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 0",
        cursor: "pointer"
      }}
    >

      {icon}

      <span>
        {text}
      </span>

    </div>

  );

}