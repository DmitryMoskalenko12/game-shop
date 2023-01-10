import './app.scss';
import MainPage from '../../pages/MainPage';
import BasketPage from '../../pages/BasketPage';
import CatalogMainPage from '../../pages/CatalogMainPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<MainPage/>}/> 
        <Route path='/basket' element = {<BasketPage/>}/>
        <Route path='/catalog' element = {<CatalogMainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
