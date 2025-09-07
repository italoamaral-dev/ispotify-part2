import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import api from "./api";
import { TextField, Button, Typography } from '@mui/material';
import { Alert } from '@mui/material';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    try {
      await api.post("http://localhost:3030/api/users", {
        name,
        email,
        password,
        role: "user"
      });
      setError("");
      navigate("/login");
    } catch (err) {
      console.error("Erro ao cadastrar", err);
      setError("Erro ao criar conta.");
    }
  };

  return (
    <div>
      <title>Sing Up - iSpotify</title>
      <p className="subscribe">
       Inscreva-se em uma <br /> 
       conta grátis do <br />
       iSpotify ®
      </p>

      <form onSubmit={handleSignup}>
        <div className="signup-inputs">
          <input className={`email-input-singup ${error ? 'input-error' : ''}`} placeholder="Email" 
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <img src="src/images/email.png" className="signup-email-icon"></img>
        </div>

        <div className="sign-inputs">
          <input className={`create-password ${error ? 'input-error' : ''}`} placeholder="Crie uma senha"
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <img src="src/images/lock.png" className="signup-lock-icon"></img>
        </div>

        <div className="sign-inputs">
          <input className={`name-input ${error ? 'input-error' : ''}`} placeholder="Nome de usuário" 
            type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
          <img src="src/images/user.png" className="signup-user-icon"></img>
        </div>

        {error && <p className="error-message-signup">{error}</p>}

        <button className="singup-button" type="submit">Inscrever-se</button>
      </form>

      <p className="login-link">
        Já é um usuário do iSpotify? <Link to="/login">FAÇA LOGIN</Link>
      </p>
    </div>
  );
}
