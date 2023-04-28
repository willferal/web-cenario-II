import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const TelaLogin = ({setUsuario}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3001/usuarios?email=${username}`).then(response =>{
      var user = response.data[0]
      if(!user){
        alert("Email não cadastrado!")
        setUsername('')
        setPassword('')
        return
      }
      if(password !== user.password){
        alert("Senha incorreta!")
        setPassword('')
        return
      }
      setUsuario(user)
      navigate('/playlist', { replace: true });
    })
  };

  return (
    <main>
      <Link to="/" id="link1">
        <div id="div1" onclick="">
          <img
            className="logo"
            src="/assets/images/logo_colorido_semFundo.png"
            id="img1"
            alt="Logo-Titulo"
          />
          <h1 className="Titulo">Soptfy</h1>
        </div>
      </Link>
      <main className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="underline"></div>
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="underline"></div>
          </div>

          <input type="submit" value="Continue" />
        </form>

        <div className="footer">
          <span>Or Connect With Social Media</span>
          <div className="social-fields">
            <div className="social-field twitter">
              <Link to="#">
                <i className="fab fa-twitter"></i>
                Sign in with Twitter
              </Link>
            </div>
            <div className="social-field facebook">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
                Sign in with Facebook
              </Link>
            </div>
          </div>
          <label className="signup">
            Don't you have an account? <a href="forms.html">Sign-up!</a>{" "}
          </label>
        </div>
      </main>
    </main>
  );
};

export default TelaLogin;
