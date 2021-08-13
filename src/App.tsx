import React from 'react';

import styles from './App.module.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from './pages';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route render={() => <h1>The page you requested cannot be found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>



  );
}

export default App;
