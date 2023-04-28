import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NavBar = ({ usuario, setUsuario }) => {
    const navigate = useNavigate();

    function logout(){
        setUsuario();
        navigate('/login', { replace: true });
    }

    return (
        <nav class="navbar navbar-inverse ">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link class="navbar-brand" to="./">
                        <img src="/assets/images/logo_colorido_semFundo.png" width="40" style={{ marginTop: -10 }} alt="" />
                    </Link>
                    <Link class="navbar-brand" to="./">Soptfy</Link>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Faq">Suporte</Link></li>
                        <li><Link to="/Playlist">Playlist</Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        {!usuario && <li><Link to="/Cadastro"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>}
                        {!usuario && <li><Link to="/Login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>}
                        {usuario && <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">{usuario.userName}
                                <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a onClick={logout}>Logout</a></li>
                                <li><a>Edit</a></li>
                            </ul>
                        </li>}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar