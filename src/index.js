import css from './scss/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './js/reducers';
import App from './js/App'; 

require('es6-promise').polyfill();
require('isomorphic-fetch');

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, 
document.getElementById('root'));