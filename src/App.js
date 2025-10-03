import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Onepiece from './pages/onepiece';
import Dragonball from './pages/dragonball';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/onepiece' element={<Onepiece />} />
          <Route path='/dragonball' element={<Dragonball />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
