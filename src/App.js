import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import Home from './Componentes/Home/Home';
import Faq from './Componentes/Faq/Faq';
import NavBar from './Componentes/NavBar/NavBar';
import Playlist from './Componentes/Playlist/Playlist';
import SelectedPlaylist from './Componentes/SelectPlaylist/SelectedPlaylist';
import Login from './Componentes/Login/Login';
import Cadastro from './Componentes/Cadastro/Cadastro';
import NewPlaylist from './Componentes/NewPLaylist/NewPlaylist';


function App() {

  const [usuarioLogado, setUsuarioLogado] = useState();



  return (
    <div className="App">
      <NavBar usuario={usuarioLogado} setUsuario={setUsuarioLogado}></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Faq' element={<Faq />}></Route>
        <Route path='/Playlist' element={<Playlist usuario={usuarioLogado} />}></Route>
        <Route path='/SelectedPlaylist/:id' element={<SelectedPlaylist usuario={usuarioLogado} />}></Route>
        <Route path='/Login' element={<Login setUsuario={setUsuarioLogado} />}></Route>
        <Route path='/Cadastro' element={<Cadastro />}></Route>
        <Route path='/NewPlaylist' element={<NewPlaylist usuario={usuarioLogado} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
