import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Navbar/Footer.js';
import "./style.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home.js';
import About from './Components/Pages/about.js';
import Contact from './Components/Pages/Contact.js';
import NotfoundPage from './Components/Pages/NotfoundPage.js';
import LandingPage from './Components/Auth/landing.page.js';
import Applayout from './Components/Auth/app.layout.js';

class App extends Component {
  render() {
  return (
    <div className="container">
      <Navbar />
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/app" component={Applayout}/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotfoundPage}/>
      </Switch>
      <Footer />
    </div>
  );
}
}

export default App;
