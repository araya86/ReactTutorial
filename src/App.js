import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import "./style.css";
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home.js'
import About from './Components/Pages/about.js'
import Contact from './Components/Pages/Contact.js'
import NotfoundPage from './Components/Pages/NotfoundPage.js'



class App extends Component {
  render() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotfoundPage}/>
      </Switch>

    </div>
  );
}
}

export default App;
