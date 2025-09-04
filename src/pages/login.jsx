import { Link } from "react-router-dom";

export default function Login() {
  return (
     <div>
            <title>Login - iSpotify</title>
            <p className="name">iSpotify ®</p>
            <p className="slogan">Música para todos.</p>

            <form>
              <div className="input-box">
                <input className="email-input" placeholder="Email" type="email" required OnClick=""></input>
                <img src="src/images/email.png" className="email-icon" alt="Email Icon"/>
              </div>

              <div className="input-box">
                <input className="password-input" placeholder="Senha" type="password" required OnClick=""></input>
                <img src="src/images/lock.png" className="password-icon" alt="Password Icon"/>
              </div>

                <button className="login-button" type="submit">Entrar</button>
            </form>
            <p className="signup-link">
            NÃO TEM UMA CONTA? <Link to="/signup">CADASTRE-SE</Link>
            </p>
        </div>
  );
}
