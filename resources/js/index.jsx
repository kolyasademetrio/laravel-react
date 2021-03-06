import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './helpers/history';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Main />
        </Router>
    </Provider>
), document.getElementById('root'));