import { combineReducers } from 'redux';
import titles from './title-reducer';

const rootReducer = combineReducers({
  titles
});

export default rootReducer;
