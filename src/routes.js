import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Sticky from './pages/sticky';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sticky" component={Sticky} />
        </Switch>
    </BrowserRouter >
)

export default Routes;
