import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SocialNetwork from './components/SocialNetwork';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Home />
      <div className="loader">
        <div className="inner"></div>
      </div>      
      <Navbar/>
      <About />
      <Skills />
      <Portfolio/>
      <Contact />
      <SocialNetwork/>
      <Footer />
    </div>
  );
}

export default App;
