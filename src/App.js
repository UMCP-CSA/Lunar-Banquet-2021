import './App.css';
import React, { useEffect } from 'react';
import Navigation from './Components/App/Navigation';
import firebase from 'firebase';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch } from 'react-redux';
import { login, logout } from './Redux/actions';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import StreamPage from './Pages/StreamPage';
import CommitteePage from './Pages/CommitteePage';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B63535',
      dark: '#870000'
    },
    secondary: {
      main: '#ffd56b',
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
    <div className='App'>
      <PayPalScriptProvider options={{ "client-id": `${process.env.REACT_APP_PAYPAL_CLIENT_ID}` }}>
        <ThemeProvider theme={theme}>
          <Router basename="/">

            <Navigation />

            <Switch>
              <Route exact path="/">
                <HomePage className="home-body" />
              </Route>
              <Route exact path="/stream">
                <StreamPage />
              </Route>
              <Route exact path="/shop">
                <ShopPage />
              </Route>
              <Route exact path="/committee">
                <CommitteePage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
