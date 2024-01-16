import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StockDetailPage from './pages/StockDetailPage';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path='/stocks/:stockName' Component={StockDetailPage} />
      </Routes>
    </BrowserRouter>
  )};

export default App;
