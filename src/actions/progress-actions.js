import * as actions from './action-types';
import ProgressService from '../services/progress-service';

const progressService = new ProgressService();

export function loadProgressSuccess(progress = []) {
  return {type: actions.LOAD_PROGRESS_SUCCESS, progress};
}

export function loadProgress() {
  return dispatch => {
    return progressService.getProgress()
      .then(progress => dispatch(loadProgressSuccess(progress)));
  };
}

export function createProgressSuccess(progress = {}) {
  return { type: actions.CREATE_PROGRESS_SUCCESS, progress };
}

export function createProgress(titleId, playthroughId) {
  return dispatch => {
    return progressService.startProgressForTitle(titleId, playthroughId)
      .then(progress => dispatch(createProgressSuccess(progress)));
  };
}

export function deleteProgressSuccess(progress = {}) {
  return { type: actions.DELETE_PROGRESS_SUCCESS, progress };
}

export function deleteProgress(titleId, playthroughId) {
  return dispatch => {
    return progressService.deleteProgress(titleId, playthroughId)
      .then(deletedPlaythrough => dispatch(deleteProgressSuccess(deletedPlaythrough)));
  };
}