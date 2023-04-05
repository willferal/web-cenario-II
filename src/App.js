import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from './Home';
import Faq from './Faq';
import NavBar from './NavBar';
import Playlist from './Playlist';
import SelectedPlaylist from './SelectedPlaylist';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
        <Route path='/Playlist' element={<Playlist/>}></Route>
        <Route path='/SelectedPlaylist/:id' element={<SelectedPlaylist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
