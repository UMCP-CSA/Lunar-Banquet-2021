import './App.css';
import React from 'react';
import Navigation from './Components/App/Navigation';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router basename="/">
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/stream" component={StreamPage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/committee" component={CommitteePage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
