import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//My Components
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="pokemon-app">
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
