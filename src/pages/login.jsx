import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import api from "./api";
import { TextField, Button, Typography } from '@mui/material';
import { Alert } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    try {
      await api.post("http://localhost:3030/api/users/login", { email, password });
      navigate("/mainpage");
      setError("");
    } catch (err) {
      console.error("Erro ao logar", err);
      setError("Email e/ou senha inválidos. Tente novamente.");
    }
  };

  return (
    <div>
      <title>Login - iSpotify</title>
      <p className="name">iSpotify ®</p>
      <p className="slogan">Música para todos.</p>

      <form onSubmit={handleLogin}>
        <div className="input-box">
          <input className={`email-input ${error ? 'input-error' : ''}`} placeholder="Email" type="email"
            value={email} onChange={(e) => setEmail(e.target.value)} fullwidth margin="normal"></input>
          <img src="src/images/email.png" className="email-icon" alt="Email Icon"/>
        </div>

        <div className="input-box">
          <input className={`password-input ${error ? 'input-error' : ''}`} placeholder="Senha" type="password" 
            value={password} onChange={(e) => setPassword(e.target.value)} fullwidth margin="normal"></input>
          <img src="src/images/lock.png" className="password-icon" alt="Password Icon"/>
        </div>

        {error && <p className="error-message-login">{error}</p>}

        <button className="login-button" type="submit">Entrar</button>
      </form>
      
      <p className="signup-link">
        NÃO TEM UMA CONTA? <Link to="/signup">CADASTRE-SE</Link>
      </p>
    </div>
  );
}
