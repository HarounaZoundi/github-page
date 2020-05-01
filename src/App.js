import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import AboutMe from './components/About';
import Navigation from './components/Navigation'

function App() {
  return (
  <Router>
  <Navigation />
  <AboutMe />
 
</Router>
  );
}

export default App;
