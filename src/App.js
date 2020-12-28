import './App.css';
import Navigation from './Components/App/Navigation';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#db2e2e'
    },
    secondary: {
      main: '#ffd778',
      light: '#fff'
    }
  }
});

function App() {
  return (
    <Router>
    <div className='App'>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>

        <ThemeProvider theme={theme}>
          <Navigation />
          <HomePage />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
