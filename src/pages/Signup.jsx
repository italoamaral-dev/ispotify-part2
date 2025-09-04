import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
          <title>Sing Up - iSpotify</title>
            <p className="subscribe">
             Inscreva-se em uma <br /> 
             conta grátis do <br />
             iSpotify ®
             </p>

            <form>
              <div className="signup-inputs">
                <input className="email-input-singup" placeholder="Email" type="email"></input>
                <img src="src/images/email.png" className="signup-email-icon"></img>
              </div>

              <div className="sign-inputs">
                <input className="create-password" placeholder="Crie uma senha" type="password"></input>
                <img src="src/images/lock.png" className="signup-lock-icon"></img>
              </div>

              <div className="sign-inputs">
                <input className="name-input" placeholder="Nome de usuário" type="text"></input>
                <img src="src/images/user.png" className="signup-user-icon"></img>
              </div>

                <button className="singup-button" type="submit">Inscrever-se</button>
            </form>
            <p className="login-link">
            Já é um usuário do iSpotify? <Link to="/login">FAÇA LOGIN</Link>
            </p>
        </div>
  );
}
