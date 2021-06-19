import { render } from 'react-dom';
import App from './App';
import React from 'react';
import 'normalize.css'
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase/firebase.context';


import { GlobalStyles } from './styles/global-styles'
render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
  ,
  document.getElementById('root')
);


