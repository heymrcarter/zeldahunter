
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import TitlesPage from './components/titles/TitlesPage';
import TitlePage from './components/titles/TitlePage';
import NewPlaythroughPage from './components/playthroughs/NewPlayThroughPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="titles" component={TitlesPage} />
    <Route path="titles/:titleId" component={TitlePage} />
    <Route path="titles/:titleId/new-playthrough" component={NewPlaythroughPage} />
  </Route>
);
