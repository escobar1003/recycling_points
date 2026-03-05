import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Aquí iría tu conexión real con backend o Firebase
    console.log("Login with:", email, password);
    alert("Login successful!");
  };

  const handleGoogleLogin = () => {
    // Aquí conectarías Firebase Google Auth
    alert("Login with Google");
  };

  const handleFacebookLogin = () => {
    // Aquí conectarías Firebase Facebook Auth
    alert("Login with Facebook");
  };

  return (
    <div className="mobile-container">
      <div className="login-card">
        <h1 className="title">Recycling Points</h1>
        <p className="subtitle">Turn waste into rewards ♻️</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="divider">or continue with</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>

        <button className="facebook-btn" onClick={handleFacebookLogin}>
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}