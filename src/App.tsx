import React, { useState } from 'react';
import './styles/style.css';
import { getStoragedFlowers } from './utils/localStorage';
import Header from './components/Header/Header';
import flowers from './API/flowers.json';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import BasketPage from './pages/BasketPage/BasketPage';
import FilterPage from './pages/FilterPage/FilterPage';

function App() {
  const [favoritesLength, setFavoriteLength] = useState(getStoragedFlowers().length);
  return (
    <BrowserRouter>
      <div className='main__page'>
        <Header count={favoritesLength} />
        <div className='container'></div>

        <Routes>
          <Route path='/' element={<FilterPage setFavorites={setFavoriteLength} flowers={flowers} />} />
          <Route path='/basketPage' element={<BasketPage setFavorites={setFavoriteLength} flowers={flowers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
