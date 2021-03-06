import { combineReducers } from 'redux';
import titles from './title-reducer';
import playthroughs from './playthrough-reducer';
import progress from './progress-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  titles,
  playthroughs,
  progress,
  routing: routerReducer
});

export default rootReducer;
