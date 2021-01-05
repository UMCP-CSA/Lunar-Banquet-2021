import React from "react";
import './App.css';
import React, { useEffect } from 'react';
import firebase from 'firebase';
import Navigation from './Components/App/Navigation';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import StreamPage from './Pages/StreamPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { login, logout } from '../src/Redux/authSlice';
import { useDispatch } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d81212',
      dark: '#870000'
    },
    secondary: {
      main: '#ffae0d',
      dark: '#ff7900'
    },
  }
});

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Set logged in state
    firebase.auth().onAuthStateChanged(user => {
      user ? dispatch(login) : dispatch(logout)
    });
  }, []);

  return (
    <Router basename="/">
      <div className='App'>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </div>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/stream">
          <StreamPage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;