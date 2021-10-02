import React from 'react';
import ReactDOM from 'react-dom';
 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
 
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
 

