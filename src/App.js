import './App.css';
import Navigation from './Components/App/Navigation';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomePage from './Pages/HomePage';

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
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Navigation />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
