'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import Main from './Main.js';

export default function() {
    const history = createHistory();
    return (
        <Router history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ Main } />
                <Route path="/" component={ Main } />
            </Route>
        </Router>
        );
}