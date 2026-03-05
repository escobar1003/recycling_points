import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav style={styles.navbar}>
        {/* Logo */}
        <Link to="/" style={styles.logoLink}>
          <span style={styles.logoIcon}>♻️</span>
          <span style={styles.logoText}>RecyclingPoints</span>
        </Link>

        {/* Links centrales */}
        <div style={{ ...styles.links, ...(menuOpen ? styles.linksOpen : {}) }}>
          <Link to="/materiales" style={styles.link}>Materiales reciclables</Link>
          <span style={styles.dot}>🌿</span>
          <Link to="/recompensas" style={styles.link}>Recompensas</Link>
          <span style={styles.dot}>🌿</span>
          <Link to="/estadisticas" style={styles.link}>Estadísticas</Link>
          <span style={styles.dot}>🌿</span>
          <Link to="/soporte" style={styles.link}>Soporte y ayuda</Link>
        </div>

        {/* Botón inicio sesión */}
        <button style={styles.loginBtn} onClick={() => navigate("/registro")}>
          Inicio sesión
        </button>

        {/* Hamburguesa para móvil */}
        <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');
      `}</style>
    </>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 32px",
    backgroundColor: "rgba(255,255,255,0.93)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(76,153,76,0.12)",
    boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
    fontFamily: "'Nunito', sans-serif",
    gap: "16px",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    flexShrink: 0,
  },
  logoIcon: { fontSize: "22px" },
  logoText: {
    fontWeight: "800",
    fontSize: "16px",
    color: "#2d7a2d",
    letterSpacing: "-0.3px",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  linksOpen: {
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    flexDirection: "column",
    backgroundColor: "white",
    padding: "16px 24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    gap: "12px",
    alignItems: "flex-start",
    zIndex: 999,
  },
  link: {
    textDecoration: "none",
    color: "#555",
    fontSize: "14px",
    fontWeight: "600",
    transition: "color 0.2s",
    whiteSpace: "nowrap",
  },
  dot: { fontSize: "10px", opacity: 0.5 },
  loginBtn: {
    background: "none",
    border: "1px solid rgba(0,170,204,0.3)",
    borderRadius: "20px",
    padding: "7px 18px",
    color: "#00aacc",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.2s",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#2d7a2d",
    padding: "4px",
  },
};