import initialState from './initial-state';
import { LOAD_PROGRESS_SUCCESS, CREATE_PROGRESS_SUCCESS } from '../actions/action-types';

export default function progressReducer(state = initialState.progress, action) {
  switch(action.type) {
    case LOAD_PROGRESS_SUCCESS:
      return action.progress;
    case CREATE_PROGRESS_SUCCESS:
      return action.progress;
    default:
      return state;
  }
}