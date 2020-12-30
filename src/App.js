import React from "react";
import './App.css';
import Navigation from './Components/App/Navigation';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ShopPage from './Pages/ShopPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}