import * as actions from './action-types';
import TitleService from '../services/title-service';

const titleService = new TitleService();

export function loadTitlesSuccess(titles) {
  return { type: actions.LOAD_TITLES_SUCCESS, titles: titles };
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
