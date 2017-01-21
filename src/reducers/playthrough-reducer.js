import * as actions from '../actions/action-types';
import initialState from './initial-state';

export default function plathroughReducer(state = initialState.playthroughs, action) {
  switch(action.type) {
    case actions.SAVE_PLAYTHROUGH_SUCCESS:
      return state.concat(action.playthrough);
    case actions.LOAD_PLAYTHROUGHS_SUCCESS:
      return state.concat(action.playthroughs);
    default:
      return state;
  }
}