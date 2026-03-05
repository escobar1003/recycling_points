export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.copy}>
        © 2025 ♻️ <strong>RecyclingPoints</strong> 🌍 🌿. Todos los derechos reservados.
      </p>
      <a href="#terms" style={styles.terms}>
        Consulta nuestros Términos y Condiciones
      </a>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1a4a1a",
    color: "white",
    textAlign: "center",
    padding: "20px 32px",
    fontFamily: "'Nunito', sans-serif",
  },
  copy: {
    margin: "0 0 6px 0",
    fontSize: "14px",
    opacity: 0.9,
  },
  terms: {
    color: "#6ee86e",
    fontSize: "13px",
    textDecoration: "underline",
  },
};