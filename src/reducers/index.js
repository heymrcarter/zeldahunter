import { combineReducers } from 'redux';
import titles from './title-reducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  titles,
  routing: routerReducer
});

export default rootReducer;
