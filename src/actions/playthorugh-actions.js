import * as actions from './action-types';
import PlaythroughService from '../services/playthrough-service';

export function createPlaythroughSuccess(playthrough) {
  return { type: actions.CREATE_PLAYTHROUGH_SUCCESS, playthrough };
}

export function addPlaythrough(playthrough) {
  const playthroughService = new PlaythroughService();
  
  return (dispatch) => {
    playthroughService.addPlaythrough(playthrough)
      .then(playthrough => {
        dispatch(playthrough);
      });

  };
}