import React from "react";
import { Link } from 'react-router-dom';
import './Cadastro.css';
import { useState } from 'react';

function Cadastro() {
    const [userName, setUsername] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [numCelular, setNumCelular] = useState('');
    const [passWord, setPassword] = useState('');
    const [passWordSecond, setPasswordSecond] = useState('');
    /*
    const [generoM, setGeneroM] = useState('M');
    const [generoF, setGeneroF] = useState('F');
    const [generoO, setGeneroO] = useState('O');
    */
    const [userArray, setUserArray] = useState([]);
  
    const handleCadastro = (e) => {
      e.preventDefault();
      const newUser = { userName, lastName, email, numCelular, passWord, passWordSecond};
      setUserArray([...userArray, newUser]);
      setUsername('');
      setLastName('');
      setEmail('');
      setNumCelular('');
      setPassword('');
      setPasswordSecond('');
      /*
    generoM, generoF, generoO
      setGeneroM('');
      setGeneroF('');
      setGeneroO('');
      */
      console.log(userArray);
    };
    return(
        <div className="container">
      <div className="form-image">
        <img src="assets/img//undraw_shopping_re_3wst.svg" alt="" />
      </div>
      <div className="form">
        <form action="#" onSubmit={handleCadastro}>
          <div className="form-header">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            <div className="login-button">
              <button>
                <Link to="/login">Voltar</Link>
              </button>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <label htmlFor="firstname">Nome</label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Digite seu primeiro nome"
                required
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="lastname">Sobrenome</label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Digite seu sobrenome"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="number">Celular</label>
              <input
                id="number"
                type="tel"
                name="number"
                placeholder="(xx) xxxx-xxxx"
                required
                value={numCelular}
                onChange={(e) => setNumCelular(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                required
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="confirmPassword">Confirme sua Senha</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Digite novamente sua senha"
                required
                value={passWordSecond}
                onChange={(e) => setPasswordSecond(e.target.value)}
              />
            </div>
          </div>

          <div className="gender-inputs">
            <div className="gender-title">
              <h6>Gênero</h6>
            </div>

            <div className="gender-group">
              <div className="gender-input">
                <input id="female" type="radio" name="gender" /*value={generoM} onChange={(e) => setGeneroM(e.target.value)}*//>
                <label htmlFor="female">Masculino</label>
              </div>

              <div className="gender-input">
                <input id="male" type="radio" name="gender"/* value={generoF} onChange={(e) => setGeneroF(e.target.value)}*//>
                <label htmlFor="male">Feminino</label>
              </div>

              <div className="gender-input">
                <input id="others" type="radio" name="gender"/* value={generoO} onChange={(e) => setGeneroO(e.target.value)}*//>
                <label htmlFor="others">Outros</label>
              </div>
            </div>
          </div>

          <div className="continue-button">
            <button>
                Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
      )
}


export default Cadastro;