import './App.css';
import {Routes, Route } from 'react-router-dom';

import Home from './Home';
import Faq from './Faq';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
