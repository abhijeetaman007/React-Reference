import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {


//If we dont use exact then if path matches then even that component is rendered like home in about
  return <Router>
    <Navbar/>
{/* as wild char always matches so we will use switch so only first one matches is displayed */}
    <Switch>
    <Route exact path="/"> <Home/> </Route>
    <Route exact path="/about"> <About/> </Route>
    <Route exact path="/people"> <People/> </Route>
    {/* '*' is wildcard char which always map*/}
    <Route path="/person/:id" children={<Person/>}></Route>
    <Route path="*"><Error/></Route>
    </Switch>
  </Router>;
};

export default ReactRouterSetup;
