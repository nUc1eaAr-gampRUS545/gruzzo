import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Lounge from './components/Lounge/Lounge';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Travelers from './components/Travelers/Travelers';
import AppRouter from './components/AppRouter';
import Zakaz from './pages/Zakaz';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;