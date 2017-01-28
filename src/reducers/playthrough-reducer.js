import * as actions from '../actions/action-types';
import initialState from './initial-state';

export default function plathroughReducer(state = initialState.playthroughs, action) {
  switch(action.type) {
    case actions.SAVE_PLAYTHROUGH_SUCCESS:
      return state.concat(action.playthrough);
    case actions.LOAD_PLAYTHROUGHS_SUCCESS:
      return state.concat(action.playthroughs);
    case actions.DELETE_PLAYTHROUGH_SUCCESS:
      return state.filter(p => p.id !== action.playthrough.id);
    default:
      return state;
  }
}