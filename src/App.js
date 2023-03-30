import './App.css';
import {Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Faq from './Faq';

function App() {
  return (
    <div className="App">


<nav class="navbar navbar-inverse ">
      <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="home.html">
                  <img src="imgs/logo_colorido_semFundo.png" width="40" style={{marginTop: -10}} alt=""/>
              </a>
              <a class="navbar-brand" href="home.html">Soptfy</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                  <li><Link to="/Home">Home</Link></li>
                  <li class="active"><Link to="/Faq">Suporte</Link></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                  <li><Link to="forms.html"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                  <li><Link to="login.html"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                  
              </ul>
          </div>
      </div>
  </nav>


      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
