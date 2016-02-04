'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import PageSet1 from './PageSet1.js';

export default function() {
    const history = createHistory();
    return (
        <Router history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ PageSet1 } />
                <Route path="/set1" component={ PageSet1 } />
            </Route>
        </Router>
        );
}