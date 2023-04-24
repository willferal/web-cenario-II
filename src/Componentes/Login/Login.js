import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const TelaLogin = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userArray, setUserArray] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    setUserArray([...userArray, newUser]);
    setUsername('');
    setPassword('');
    console.log(userArray);
  };

  return (
    <main>
      <Link to="/Home" id="link1">
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
              placeholder="Enter Your Username"
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
