import { combineReducers } from 'redux';
import titles from './title-reducer';
import progress from './progress-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  titles,
  progress,
  routing: routerReducer
});

export default rootReducer;
