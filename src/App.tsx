import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './App.module.css'

import { HomePage , SignInPage , RegisterPage , DetailPage } from './pages'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/signIn' component={SignInPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/detail/:touristRouteId' component={DetailPage} />
          <Route  render={() => <h1>404 not found 页面 去火星了</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
