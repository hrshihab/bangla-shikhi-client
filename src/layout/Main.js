import React from 'react';
import Header from '../Page/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;