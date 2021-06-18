import React from 'react'
import './App.css'
import Home from './home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContactSection from './components/ContactSection'


function App() {
  return (
    <Router basename='/myapp'>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactSection} exact />
      </Switch>
    </Router>
  );
}

export default App;
