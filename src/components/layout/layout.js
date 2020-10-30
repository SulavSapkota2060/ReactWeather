import React from "react";
import Aux from "../hoc/AuxWrapper/auxwrap";
import Main from "../appbuild/main"
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import About from '../../directories/aboutme/about'
import Nav from '../../components/navbar/navbar'

const Layout = () => {
  return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
  );
};



export default Layout;
