import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import Search from '../Search/Search';

const AllHome = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search/>
      {/* Добавьте другие компоненты, которые должны быть отображены внутри HOME_ROUTE */}
    </div>
  );
};

export default AllHome;