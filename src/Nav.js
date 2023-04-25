import React from "react"
import "./indexStyle"

<nav class="navbar navbar-inverse ">
<div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="home.html">
            <img src="imgs/logo_colorido_semFundo.png" width="40" style="margin-top: -10px;" alt=""/>
        </a>
        <a class="navbar-brand" href="home.html">Soptfy</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
            <li><a href="home.html">Home</a></li>
            <li class="active"><a href="faq.html">Suporte</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="forms.html"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="login.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
</div>
</nav>