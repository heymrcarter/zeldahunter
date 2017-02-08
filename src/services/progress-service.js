import MockLocalStorage from '../services/mock-localstorage';
import extractIds from '../utils/id-extractor';
import { generateId } from '../utils/id-generator';

let storage = window.localStorage;

if (process.env.NODE_ENV === 'test') {
  storage = new MockLocalStorage();
}

const PROGRESS_KEY = 'zeldahunter:progress';

class ProgressService {
  constructor(store = storage) {
    this.store = store;

    const progress = store.getItem(PROGRESS_KEY);

    if (!progress) {
      store.setItem(PROGRESS_KEY, JSON.stringify([]));
    }
  }

  getProgress() {
    return new Promise(resolve => {
      resolve(JSON.parse(this.store.getItem(PROGRESS_KEY)));
    });
  }

  startProgressForTitle(titleId, playthroughId) {
    return new Promise((resolve, reject) => {
      if (!titleId) {
        reject(new Error('Invalid titleId'));
      }

      if (!playthroughId) {
        reject(new Error('Invalid playthroughId'));
      }

      const endpoint = `${process.env.ZH_PROGRESS_ENDPOINT}/${titleId}`;
      const progress = JSON.parse(this.store.getItem(PROGRESS_KEY));
      const progressIds = extractIds(progress);
      
      fetch(endpoint, {Accept: 'application/json'})   
        .then(res => res.json())
        .then(json => {
          const newProgress = {
            id: generateId(progressIds),
            titleId,
            playthroughId,
            collectables: json
          };

          progress.push(newProgress);

          this.store.setItem(PROGRESS_KEY, JSON.stringify(progress));
          
          resolve(newProgress);
        })
        .catch(error => reject(error));
    });
  }

  deleteProgress(titleId, playthroughId) {
    return new Promise(resolve => {
      const progress = JSON.parse(this.store.getItem(PROGRESS_KEY));
      const newProgress = progress.filter(p => p.titleId !== titleId && p.playthroughId !== playthroughId);

      this.store.setItem(PROGRESS_KEY, JSON.stringify(newProgress));

      const deletedProgress = progress.filter(p => p.titleId === titleId && p.playthroughId === playthroughId)[0];

      resolve(deletedProgress);
    });
  }
}

export default ProgressService;