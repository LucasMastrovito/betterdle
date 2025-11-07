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
import Sonic from './pages/sonic';
import Valorant from './pages/valorant';
import Pokemon from './pages/pokemon';
import Tek from './pages/tek';
import Disney from './pages/disney';
import Movie from './pages/movie';
import Games from './pages/games';
import Toons from './pages/toons';
import Actors from './pages/actors';
import Mario from './pages/mario';
import Countries from './pages/countries';

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
          <Route path='/valorant' element={<Valorant />} />
          <Route path='/sw' element={<Sw />} />
          <Route path='/gacha' element={<Gacha />} />
          <Route path='/sonic' element={<Sonic />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/epitech' element={<Tek />} />
          <Route path='/disney' element={<Disney />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/games' element={<Games />} />
          <Route path='/toons' element={<Toons />} />
          <Route path='/actors' element={<Actors />} />
          <Route path='/mario' element={<Mario />} />
          <Route path='/countries' element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
