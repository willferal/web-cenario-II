import './App.css';
import {Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Faq from './Faq';
import NavBar from './NavBar';
import Playlist from './Playlist';
import SelectedPlaylistAngra from './SelectedPlaylistAngra';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
        <Route path='/Playlist' element={<Playlist/>}></Route>
        {/* <Route path='/SelectedPlaylistRacionais' element={<SelectedPlaylistRacionais/>}></Route>
        <Route path='/SelectedPlaylistA7x' element={<SelectedPlaylistA7x/>}></Route> */}
        <Route path='/SelectedPlaylistAngra' element={<SelectedPlaylistAngra/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
