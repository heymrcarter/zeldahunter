import * as actions from './action-types';
import titleService from '../services/title-service';

export function loadTitlesSuccess(titles) {
  return { type: actions.LOAD_TITLES_SUCCESS, titles };
}

export function loadTitles() {
  return (dispatch) => {
    return titleService.getTitles().then(titles => {
      dispatch(loadTitlesSuccess(titles));
    }).catch(error => {
      throw(error);
    });
  };
}
