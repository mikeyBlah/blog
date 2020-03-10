import React from 'react';
import Header from './header';
import Footer from './footer';
import layoutStyles from '../styles/layout.module.scss';

const Layout = ( props ) => {
  return (
    <div className={layoutStyles.layout__container}>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
};

export default Layout;