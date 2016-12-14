import * as actions from '../actions/action-types';
import initialState from './initial-state';

export default function progressReducer(state = initialState.progress, action) {
  switch (action.type) {
    case actions.LOAD_PROGRESS_SUCCESS:
      return action.progress;
    default:
      return state;
  }
}
