import * as actions from './action-types';

export function loadProgressSuccess(progress) {
  return {type: actions.LOAD_PROGRESS_SUCCESS, progress};
}
