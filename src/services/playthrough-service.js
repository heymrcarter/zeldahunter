import * as validator from '../validators/playthrough-validator';
import MockLocalStorage from '../services/mock-localstorage';

let storage = window.localStorage;

if (process.env.NODE_ENV === 'test') {
  storage = new MockLocalStorage();
}

const PLAYTHROUGH_KEY = 'zeldahunter:playthroughs';

function generateId(playthroughs = []) {
  return playthroughs.length + 1;
}

export default class PlaythroughService {
  constructor(store = storage, playthroughValidator = validator) {
    this.store = store;
    this.validator = playthroughValidator;

    const playthroughs = store.getItem(PLAYTHROUGH_KEY);

    if (!playthroughs) {
      store.setItem(PLAYTHROUGH_KEY, JSON.stringify([]));
    }
  }

  getPlaythroughs() {
    const playthroughs = JSON.parse(this.store.getItem(PLAYTHROUGH_KEY)) || [];

    return new Promise(resolve => {
      resolve(playthroughs);
    });
  }

  getPlaythrough(id) {
    const playthroughs = JSON.parse(this.store.getItem(PLAYTHROUGH_KEY));
    const playthrough = playthroughs.filter(playthrough => {
      return playthrough.id === id;
    });

    return new Promise(resolve => {
      resolve(playthrough[0]);
    });
  }

  getPlaythroughsByTitle(titleId) {
    const playthroughs = JSON.parse(this.store.getItem(PLAYTHROUGH_KEY));

    const playthroughsForTitle = playthroughs.filter(playthrough => {
      return playthrough.titleId === titleId;
    });

    return new Promise(resolve => {
      resolve(playthroughsForTitle);
    });
  }

  savePlaythrough(playthrough) {
    const playthroughs = JSON.parse(this.store.getItem(PLAYTHROUGH_KEY));
    playthrough = Object.assign({}, playthrough, { lastUpdated: Date.now() });
    
    return new Promise((resolve, reject) => {
      playthrough.id = generateId(playthroughs);
      
      if (this.validator.validate(playthrough)) {
        playthroughs.push(playthrough);

        this.store.setItem(PLAYTHROUGH_KEY, JSON.stringify(playthroughs));
        
        resolve(playthrough);
      } else {
        reject('Invalid playthrough');
      }
    });
  }
}