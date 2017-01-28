import * as actions from './action-types';
import PlaythroughService from '../services/playthrough-service';

let playthroughService = new PlaythroughService();

export function savePlaythroughSuccess(playthrough) {
  return { type: actions.SAVE_PLAYTHROUGH_SUCCESS, playthrough };
}

export function savePlaythrough(playthrough) {
  return (dispatch) => {
    return playthroughService.savePlaythrough(playthrough)
      .then(playthrough => {
        dispatch(savePlaythroughSuccess(playthrough));
      });
  };
}

export function loadPlaythroughsSuccess(playthroughs) {
  return { type: actions.LOAD_PLAYTHROUGHS_SUCCESS, playthroughs };
}

export function loadPlaythroughs() {
  return (dispatch) => {
    return playthroughService.getPlaythroughs()
      .then(playthroughs => {
        dispatch(loadPlaythroughsSuccess(playthroughs));
      });
  };
}

export function deletePlaythroughSuccess(playthrough) {
  return { type: actions.DELETE_PLAYTHROUGH_SUCCESS, playthrough };
}

export function deletePlaythrough(playthroughId) {
  return dispatch => {
    return playthroughService.deletePlaythrough(playthroughId)
      .then(playthrough => {
        dispatch(deletePlaythroughSuccess(playthrough));
      });
  };
}