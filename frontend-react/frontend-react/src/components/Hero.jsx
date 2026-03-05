import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import fondoImg from "../assets/fondo.jpeg";

const BG_ICONS = [
  { emoji: "🚲", top: "5%",  left: "20%", size: 90 },
  { emoji: "🌍", top: "15%", left: "8%",  size: 70 },
  { emoji: "💡", top: "40%", left: "22%", size: 65 },
  { emoji: "🌱", top: "60%", left: "5%",  size: 55 },
  { emoji: "⚡", top: "75%", left: "18%", size: 60 },
  { emoji: "🌿", top: "85%", left: "30%", size: 50 },
  { emoji: "☀️", top: "90%", left: "72%", size: 65 },
  { emoji: "🔋", top: "70%", left: "82%", size: 60 },
  { emoji: "🌲", top: "45%", left: "88%", size: 70 },
  { emoji: "🚗", top: "20%", left: "78%", size: 75 },
  { emoji: "🌏", top: "80%", left: "60%", size: 80 },
  { emoji: "🛍️", top: "88%", left: "45%", size: 55 },
  { emoji: "🌧️", top: "55%", left: "75%", size: 50 },
  { emoji: "💚", top: "30%", left: "60%", size: 45 },
  { emoji: "♻️", top: "10%", left: "55%", size: 55 },
];

export default function Hero() {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={styles.hero}>

      {/* ── Fondo con íconos flotantes ── */}
      <div style={styles.bgLayer} ref={parallaxRef}>
        {BG_ICONS.map((icon, i) => (
          <span
            key={i}
            style={{
              ...styles.bgIcon,
              top: icon.top,
              left: icon.left,
              fontSize: icon.size,
              animationDelay: `${i * 0.35}s`,
            }}
          >
            {icon.emoji}
          </span>
        ))}
      </div>

      {/* ── Columna izquierda ── */}
      <div style={styles.leftCol}>

        {/* Burbuja principal */}
        <div style={styles.bubble}>
          <h1 style={styles.mainTitle}>Reciclar nunca fue tan fácil.</h1>
          <p style={styles.subtitle}>
            Conecta con centros de reciclaje y gana recompensas valiosas.
          </p>
          <p style={styles.ctaText}>
            ¡Únete hoy y transforma tus{" "}
            <span style={styles.pinkText}>residuos en oportunidades!</span>
          </p>
          <button style={styles.grayBtn} onClick={() => navigate("/registro")}>
            Comencemos
          </button>
        </div>

        {/* Bloque guía */}
        <div style={styles.guideBlock}>
          <p style={styles.blueText}>¿Sabes cómo usar nuestra plataforma?</p>
          <p style={styles.blueText}>¡Es más fácil de lo que imaginas!</p>
          <button style={styles.grayBtn}>Guía paso a paso...</button>
        </div>
      </div>

      {/* ── Centro ── */}
      <div style={styles.centerCol}>

        {/* 3 tarjetas */}
        <div style={styles.cardsRow}>
          <FeatureCard
            title="Recicla y Gana 🌟"
            desc="por reciclar obtendrás bonos de canjes y premios en descuentos y efectivo"
          />
          <FeatureCard
            title="Dale Vida a tu Mundo 🌎"
            desc="Haz que tu huella sea verde y deja un planeta más limpio para las próximas generaciones."
            featured
          />
          <FeatureCard
            title="Pequeños Gestos, Grandes Cambios"
            desc="Tus acciones diarias suman 🌱 y pueden transformar el futuro de todos 🌍"
          />
        </div>

        {/* Imagen central */}
        <div style={styles.imgWrapper}>
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80"
            alt="Niños reciclando"
            style={styles.heroImg}
          />
        </div>

        <p style={styles.knowMore}>Conoce qué materiales se reciclan y cuales no</p>

        {/* Misión */}
        <div style={styles.missionBox}>
          <span style={{ fontSize: 48 }}>🤲</span>
          <h2 style={styles.missionTitle}>Nuestra misión</h2>
          <p style={styles.missionText}>
            Facilitar y promover el reciclaje en tu comunidad, conectando a los ciudadanos
            con puntos de reciclaje y generando un impacto ambiental medible con incentivos reales.
          </p>
          <button style={styles.linkBtn}>Más sobre nosotros...</button>
        </div>
      </div>

      {/* ── Columna derecha ── */}
      <div style={styles.rightCol}>
        <div style={styles.ratingBlock}>
          <p style={styles.ratingText}>
            Calificanos y sé parte del{" "}
            <span style={styles.pinkText}>cambio para crecer</span>
          </p>
          <button style={styles.grayBtn}>Calificamos</button>
        </div>
      </div>

      {/* Animaciones globales */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');
        @keyframes floatY {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-18px) rotate(4deg); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fcard:hover {
          transform: translateY(-6px) scale(1.03) !important;
          box-shadow: 0 18px 40px rgba(45,122,45,0.28) !important;
        }
      `}</style>
    </section>
  );
}

/* ── Tarjeta de característica ── */
function FeatureCard({ title, desc, featured }) {
  return (
    <div
      className="fcard"
      style={{
        ...styles.card,
        ...(featured ? styles.cardFeatured : {}),
      }}
    >
      <div style={styles.cardIconCircle}>🌿</div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
      <button style={styles.cardBtn}>¡Go!</button>
    </div>
  );
}

/* ── Estilos ── */
const styles = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    background: `linear-gradient(140deg, rgba(240,247,238,0.82) 0%, rgba(230,245,219,0.82) 100%), url(${fondoImg}) center/cover no-repeat`,
    display: "flex",
    paddingTop: "72px",
    fontFamily: "'Nunito', sans-serif",
    overflow: "hidden",
  },

  // Fondo
  bgLayer: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
  bgIcon: {
    position: "absolute",
    opacity: 0.11,
    animation: "floatY 7s ease-in-out infinite",
    userSelect: "none",
  },

  // Columna izquierda
  leftCol: {
    position: "relative",
    zIndex: 1,
    width: "25%",
    minWidth: "220px",
    padding: "48px 20px 48px 36px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "36px",
  },
  bubble: {
    background: "rgba(255,255,255,0.78)",
    borderRadius: "22px",
    padding: "26px 22px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
    animation: "fadeUp 0.7s ease both",
  },
  mainTitle: {
    fontFamily: "'Fredoka One', cursive",
    fontSize: "21px",
    color: "#00aacc",
    margin: "0 0 10px 0",
    lineHeight: 1.3,
  },
  subtitle: {
    fontSize: "13px",
    color: "#555",
    margin: "0 0 10px 0",
    lineHeight: 1.55,
  },
  ctaText: {
    fontSize: "13px",
    color: "#444",
    margin: "0 0 16px 0",
    lineHeight: 1.55,
  },
  pinkText: { color: "#cc0055", fontWeight: "800" },
  blueText: { color: "#00aacc", fontWeight: "700", fontSize: "14px", margin: "0 0 4px" },
  guideBlock: { animation: "fadeUp 0.7s ease 0.25s both" },

  grayBtn: {
    backgroundColor: "#e2e2e2",
    border: "none",
    borderRadius: "8px",
    padding: "9px 20px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    color: "#333",
    transition: "all 0.2s",
    marginTop: "10px",
  },

  // Centro
  centerCol: {
    position: "relative",
    zIndex: 1,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 12px 48px",
    gap: "22px",
  },
  cardsRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
    animation: "fadeUp 0.7s ease 0.15s both",
  },
  card: {
    background: "linear-gradient(145deg,#5cb85c,#3d8b3d)",
    borderRadius: "18px",
    padding: "20px 14px",
    width: "158px",
    color: "white",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s,box-shadow 0.3s",
    boxShadow: "0 8px 24px rgba(45,122,45,0.2)",
  },
  cardFeatured: {
    background: "linear-gradient(145deg,#49b249,#276827)",
    width: "176px",
    transform: "scale(1.05)",
    boxShadow: "0 12px 32px rgba(45,122,45,0.35)",
  },
  cardIconCircle: {
    background: "rgba(255,255,255,0.2)",
    borderRadius: "50%",
    width: "42px",
    height: "42px",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px",
  },
  cardTitle: {
    fontFamily: "'Fredoka One', cursive",
    fontSize: "14px",
    margin: "0 0 7px",
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: "11px",
    opacity: 0.92,
    margin: "0 0 12px",
    lineHeight: 1.4,
  },
  cardBtn: {
    background: "rgba(255,255,255,0.25)",
    border: "1px solid rgba(255,255,255,0.5)",
    borderRadius: "20px",
    padding: "5px 16px",
    color: "white",
    fontWeight: "700",
    fontSize: "12px",
    cursor: "pointer",
  },

  // Imagen
  imgWrapper: {
    borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
    overflow: "hidden",
    width: "270px",
    height: "230px",
    boxShadow: "0 16px 48px rgba(0,0,0,0.14)",
    border: "4px solid rgba(255,255,255,0.85)",
    animation: "fadeUp 0.7s ease 0.35s both",
  },
  heroImg: { width: "100%", height: "100%", objectFit: "cover" },
  knowMore: { fontSize: "13px", color: "#555", fontWeight: "600" },

  // Misión
  missionBox: {
    background: "rgba(255,255,255,0.62)",
    borderRadius: "22px",
    padding: "28px 36px",
    textAlign: "center",
    maxWidth: "440px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    animation: "fadeUp 0.7s ease 0.5s both",
  },
  missionTitle: {
    fontFamily: "'Fredoka One', cursive",
    color: "#00aacc",
    fontSize: "24px",
    margin: "8px 0 12px",
  },
  missionText: {
    fontSize: "13px",
    color: "#555",
    lineHeight: 1.6,
    margin: "0 0 16px",
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#555",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "underline",
  },

  // Columna derecha
  rightCol: {
    position: "relative",
    zIndex: 1,
    width: "22%",
    minWidth: "180px",
    padding: "48px 32px 48px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  ratingBlock: { animation: "fadeUp 0.7s ease 0.55s both" },
  ratingText: {
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.55,
    marginBottom: "14px",
    fontWeight: "600",
  },
};