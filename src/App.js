import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Onepiece from './pages/onepiece';
import Dragonball from './pages/dragonball';
import Sw from './pages/sw';
import { useEffect } from 'react';
import Anime from './pages/anime';
import Lol from './pages/lol';
import Gacha from './pages/gacha';

function App() {
  useEffect(() => {
    const today = new Date().toDateString();
    const lastReset = localStorage.getItem("lastReset");

    if (lastReset !== today) {
      localStorage.clear();
      localStorage.setItem("lastReset", today);
      window.location.reload();
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/anime' element={<Anime />} />
          <Route path='/onepiece' element={<Onepiece />} />
          <Route path='/dragonball' element={<Dragonball />} />
          <Route path='/lol' element={<Lol />} />
          <Route path='/sw' element={<Sw />} />
          <Route path='/gacha' element={<Gacha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
