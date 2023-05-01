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
import EditProfile from './Componentes/EditProfile/EditProfile';
import EditPlaylist from './Componentes/EditPlaylist/EditPlaylist';

function App() {

  const [usuarioLogado, setUsuarioLogado] = useState();



  return (
    <div className="App">
      <NavBar usuario={usuarioLogado} setUsuario={setUsuarioLogado}></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Faq' element={<Faq />}></Route>
        <Route path='/Playlist' element={<Playlist usuario={usuarioLogado} />}></Route>
        <Route path='/SelectedPlaylist/:id' element={<SelectedPlaylist usuario={usuarioLogado} setUsuario={setUsuarioLogado}/>}></Route>
        <Route path='/Login' element={<Login setUsuario={setUsuarioLogado} />}></Route>
        <Route path='/Cadastro' element={<Cadastro />}></Route>
        <Route path='/NewPlaylist' element={<NewPlaylist usuario={usuarioLogado} setUsuario={setUsuarioLogado}/>}></Route>
        <Route path='/EditProfile' element={<EditProfile usuario={usuarioLogado} setUsuario={setUsuarioLogado}></EditProfile>}></Route>
        <Route path='/EditPlaylist/:id' element={<EditPlaylist usuario={usuarioLogado} setUsuario={setUsuarioLogado}></EditPlaylist>}></Route>
      </Routes>
    </div>
  );
}

export default App;
