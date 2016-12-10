import * as actions from '../actions/action-types';
import initialState from './initial-state';

export default function titleReducer(state = initialState.titles, action) {
  switch(action.type) {
    case actions.LOAD_TITLES_SUCCESS:
      return action.titles;
    default:
      return state;
  }
}
