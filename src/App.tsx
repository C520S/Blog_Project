import React from 'react';

import styles from './App.module.css';
import { Menu } from 'antd';
import { Header, Footer } from './components'


function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.menu}>
        <Menu mode={'horizontal'} className={styles['main-menu']}>
          <Menu.Item key="1">Pasta</Menu.Item>
          <Menu.Item key="2">Red meat</Menu.Item>
          <Menu.Item key="3">Chicken</Menu.Item>
          <Menu.Item key="4">Salads</Menu.Item>
          <Menu.Item key="5">Seafood</Menu.Item>
          <Menu.Item key="6">Sushi</Menu.Item>
          <Menu.Item key="7">Vegan</Menu.Item>
          <Menu.Item key="8">Finnish food</Menu.Item>
          <Menu.Item key="9">Armenian food</Menu.Item>
          <Menu.Item key="10">Chinese food</Menu.Item>
        </Menu>
      </div>
      <Footer />
    </div>



  );
}

export default App;
