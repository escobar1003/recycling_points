import { useState } from "react";

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <path
      d="M12 2C6.5 2 2 7 2 12.5C2 16.5 4.5 20 8 21.5C8 18 9 15 11 13C9.5 15.5 9 18 9.5 21.5C10.3 21.8 11.1 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
      fill="#7BC67A"
    />
    <path
      d="M12 2C12 2 8 8 8 13C8 16.5 9.5 19.5 12 21.5C14.5 19.5 16 16.5 16 13C16 8 12 2 12 2Z"
      fill="#4CAF50"
    />
  </svg>
);

export default function RecyclingRegister() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmar: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
    }, 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #c8f5c8 0%, #a8e6a8 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "20px"
    }}>
      <div style={{
        background: "#b8f0b8",
        borderRadius: "24px",
        padding: "36px 32px",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 8px 32px rgba(0,100,0,0.12)",
        animation: "fadeIn 0.5s ease"
      }}>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pop {
            0% { transform: scale(0.8); opacity: 0; }
            70% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
          }
          .input-field {
            width: 100%;
            padding: 13px 16px;
            border: none;
            border-radius: 10px;
            font-size: 15px;
            outline: none;
            box-sizing: border-box;
            background: #ffffff;
            color: #555;
            transition: box-shadow 0.2s;
          }
          .input-field:focus {
            box-shadow: 0 0 0 3px rgba(76,175,80,0.3);
          }
          .input-field::placeholder {
            color: #aaa;
          }
          .btn-register {
            width: 100%;
            padding: 15px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 800;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .btn-register:hover { background: #43A047; transform: translateY(-1px); }
          .btn-register:active { transform: translateY(0); }
          .btn-login-link {
            width: 100%;
            padding: 13px;
            background: transparent;
            color: #2E7D32;
            border: 2px solid #4CAF50;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .btn-login-link:hover { background: rgba(76,175,80,0.1); transform: translateY(-1px); }
          .success-banner {
            background: #2E7D32;
            color: white;
            border-radius: 10px;
            padding: 12px 16px;
            text-align: center;
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 16px;
            animation: pop 0.4s ease;
          }
          .row {
            display: flex;
            gap: 10px;
          }
          .row .input-field {
            flex: 1;
          }
          .divider {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 16px 0;
          }
          .divider-line {
            flex: 1;
            height: 1px;
            background: rgba(0,100,0,0.2);
          }
          .divider-text {
            font-size: 12px;
            color: #555;
            font-weight: 600;
          }
          .btn-facebook {
            width: 100%;
            padding: 13px;
            background: #3b5998;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .btn-facebook:hover { background: #324d85; transform: translateY(-1px); }
          .btn-google {
            width: 100%;
            padding: 13px;
            background: #db4437;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .btn-google:hover { background: #c43d31; transform: translateY(-1px); }
        `}</style>

        {/* Title */}
        <h1 style={{
          textAlign: "center",
          fontSize: "21px",
          fontWeight: "800",
          color: "#1a1a1a",
          margin: "0 0 20px 0",
          lineHeight: 1.3
        }}>
          Crear cuenta en<br />recycling points
        </h1>

        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
          <div style={{
            width: "68px",
            height: "68px",
            borderRadius: "50%",
            background: "#2E7D32",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(46,125,50,0.4)"
          }}>
            <LeafIcon />
          </div>
        </div>

        {/* Success banner */}
        {success && (
          <div className="success-banner">
            ✅ ¡Cuenta creada exitosamente!
          </div>
        )}

        {/* Nombre y Apellido */}
        <div className="row" style={{ marginBottom: "12px" }}>
          <input
            className="input-field"
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "12px" }}>
          <input
            className="input-field"
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Teléfono */}
        <div style={{ marginBottom: "12px" }}>
          <input
            className="input-field"
            type="tel"
            placeholder="Teléfono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>

        {/* Contraseña */}
        <div style={{ marginBottom: "12px" }}>
          <input
            className="input-field"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {/* Confirmar contraseña */}
        <div style={{ marginBottom: "18px" }}>
          <input
            className="input-field"
            type="password"
            placeholder="Confirmar contraseña"
            name="confirmar"
            value={form.confirmar}
            onChange={handleChange}
          />
          {form.confirmar && form.password !== form.confirmar && (
            <p style={{ color: "#c62828", fontSize: "12px", margin: "6px 0 0 4px" }}>
              Las contraseñas no coinciden
            </p>
          )}
        </div>

        {/* Botón registrar */}
        <div style={{ marginBottom: "10px" }}>
          <button className="btn-register" onClick={handleRegister} disabled={loading}>
            {loading ? "Creando cuenta..." : "CREAR CUENTA"}
          </button>
        </div>

        {/* Ya tengo cuenta */}
        <div style={{ marginBottom: "16px" }}>
          <button className="btn-login-link">
            YA TENGO CUENTA
          </button>
        </div>

        {/* Divider */}
        <div className="divider">
          <div className="divider-line" />
          <span className="divider-text">O REGÍSTRATE CON</span>
          <div className="divider-line" />
        </div>

        {/* Social buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button className="btn-facebook">FACEBOOK</button>
          <button className="btn-google">GOOGLE</button>
        </div>
      </div>
    </div>
  );
}