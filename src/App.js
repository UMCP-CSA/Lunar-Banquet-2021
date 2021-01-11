import './App.css';
import React, { useEffect } from 'react';
import Navigation from './Components/App/Navigation';
import firebase from 'firebase';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import StreamPage from './Pages/StreamPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from './Redux/actions';

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
    firebase.auth().onAuthStateChanged(user => {
         if (user) dispatch(login(user.displayName));
         else dispatch(logout());
         console.log(user);
     });
 }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <div className='App'>

          <Navigation />

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
    </ThemeProvider>
  );
}

export default App;
