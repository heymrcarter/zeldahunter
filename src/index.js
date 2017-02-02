/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configure-store';
require('./favicon.ico');
import { syncHistoryWithStore } from 'react-router-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './styles/styles.scss';
import { loadTitles } from './actions/title-actions';
import { loadPlaythroughs } from './actions/playthrough-actions';
import { loadProgress } from './actions/progress-actions';

const store = configureStore();
store.dispatch(loadTitles());
store.dispatch(loadPlaythroughs());
store.dispatch(loadProgress());

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
