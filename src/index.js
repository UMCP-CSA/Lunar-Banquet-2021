import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from '../src/Firebase/firebase';
import FirebaseContext from '../src/Firebase/FirebaseContext';
import { Provider } from 'react-redux';
import store from '../src/Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new firebase()}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

