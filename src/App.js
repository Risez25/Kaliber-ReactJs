import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';

//components
import Home from './components/Home/Home.js';
import Solution from './components/Solution/Solution.js';
import Simulation from './components/Simulation/Simulation.js';
import Engines from './components/Engines/Engines.js';
import Clients from './components/Clients/Clients.js';
import Contact from './components/Contact/Contact.js';


let Element    = Scroll.Element;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div >
           <Navigation />
        </div>
        <Element name="Home">
          <Home />
        </Element>
        <Element name="Solution">
          <Solution />
        </Element>
        <Element name="Simulation">
          <Simulation />
        </Element>
        <Element name="Engines">
          <Engines/>
        </Element>
        <Element name="Client">
          <Clients/>
        </Element>
        <Element name="Contact">
          <Contact/>
        </Element>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
