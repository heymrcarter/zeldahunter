import MockLocalStorage from '../services/mock-localstorage';

let storage = window.localStorage;

if (process.env.NODE_ENV === 'test') {
  storage = new MockLocalStorage();
}

const TITLE_KEY = 'zeldahunter:titles';

class TitleService {
  constructor(store = storage) {
    this.store = store;

    const titles = store.getItem(TITLE_KEY);

    if (!titles) {
      store.setItem(TITLE_KEY, JSON.stringify([]));
    }
  }
  
  getTitles() {   
    return new Promise((resolve, reject) => {
      let titles = JSON.parse(this.store.getItem(TITLE_KEY) || '[]');

      if (titles && titles.length > 0) {
        resolve(titles);
      } else {
        fetch(process.env.ZH_TITLES_ENDPOINT, {Accept: 'application/json'})
          .then(res => res.json())
          .then(titles => {
            this.store.setItem(TITLE_KEY, JSON.stringify(titles));
            
            resolve(titles);
          })
          .catch(error => reject(error));
      }
    });
  }
}

export default TitleService;