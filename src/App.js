import './App.css';
import Navigation from './Components/App/Navigation';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ShopPage from './Pages/ShopPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
  return (
    <Router basename="/">
      <div className='App'>
        <ThemeProvider theme={theme}>
          <Navigation />
          <HomePage />
        </ThemeProvider>
      </div>

      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
