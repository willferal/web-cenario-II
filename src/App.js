import './App.css';
import {Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Faq from './Faq';
import NavBar from './NavBar';
import Playlist from './Playlist';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
        <Route path='/Playlist' element={<Playlist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
