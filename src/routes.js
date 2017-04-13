import React from 'react';
import { Switch, Route } from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
