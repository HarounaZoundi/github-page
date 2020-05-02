import React from 'react';
import './App.css';
import AboutMe from './components/About';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className ="content-wrapper">
      <Navigation />
      <AboutMe />
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
