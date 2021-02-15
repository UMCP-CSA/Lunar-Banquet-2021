import './App.css';
import React from 'react';
import Navigation from './Components/App/Navigation';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DaresTabs from './Pages/DaresTabs';
import CommitteePage from './Pages/CommitteePage';
import FAQPage from './Pages/FAQPage';


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
            <Route exact path="/dares" component={DaresTabs} />
            <Route exact path="/committee" component={CommitteePage} />
            <Route exact path="/faq" component={FAQPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
