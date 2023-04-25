import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from './Componentes/Home/Home';
import Faq from './Componentes/Faq/Faq';
import NavBar from './Componentes/NavBar/NavBar';
import Playlist from './Componentes/Playlist/Playlist';
import SelectedPlaylist from './Componentes/SelectPlaylist/SelectedPlaylist';
import Login from './Componentes/Login/Login';
import Cadastro from './Componentes/Cadastro/Cadastro';
import NewPlaylist from './Componentes/NewPLaylist/NewPlaylist';


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
        <Route path='/Playlist' element={<Playlist/>}></Route>
        <Route path='/SelectedPlaylist/:id' element={<SelectedPlaylist/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cadastro' element={<Cadastro/>}></Route>
        <Route path='/NewPlaylist' element={<NewPlaylist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
