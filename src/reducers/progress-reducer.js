import initialState from './initial-state';
import { LOAD_PROGRESS_SUCCESS, CREATE_PROGRESS_SUCCESS, DELETE_PLAYTHROUGH_SUCCESS } from '../actions/action-types';

export default function progressReducer(state = initialState.progress, action) {
  switch(action.type) {
    case LOAD_PROGRESS_SUCCESS:
      return state.concat(action.progress);
    case CREATE_PROGRESS_SUCCESS:
      return state.concat(action.progress);
    case DELETE_PLAYTHROUGH_SUCCESS:
      return state.filter(p => p.id !== action.progress.id);
    default:
      return state;
  }
}