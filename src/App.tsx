import React from 'react';

import { BrowserRouter , Route  } from 'react-router-dom'

import styles from './App.module.css'

import {HomePage} from './pages'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Route path='/' component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
