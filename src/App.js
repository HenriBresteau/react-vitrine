import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Porfolio from './pages/Porfolio';

const App = () => {
  return (
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project-1" component={Porfolio} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    
  );
};

export default App;