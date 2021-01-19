import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <div data-testid="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Calculator" component={Calculator} />
          <Route exact path="/Quote" component={Quote} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
