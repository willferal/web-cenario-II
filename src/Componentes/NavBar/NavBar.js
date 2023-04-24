import React from "react";
import { Link } from "react-router-dom";


const NavBar = props => {
    return (
        <nav class="navbar navbar-inverse ">
      <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <Link class="navbar-brand" to="./Home">
                  <img src="/assets/images/logo_colorido_semFundo.png" width="40" style={{marginTop: -10}} alt=""/>
              </Link>
              <Link class="navbar-brand" to="./Home">Soptfy</Link>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                  <li><Link to="/Home">Home</Link></li>
                  <li><Link to="/Faq">Suporte</Link></li>
                  <li><Link to="/Playlist">Playlist</Link></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                  <li><Link to="/Cadastro"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                  <li><Link to="/Login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                  
              </ul>
          </div>
      </div>
  </nav>
    )
}

export default NavBar