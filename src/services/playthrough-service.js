export default class PlaythroughService {
  constructor(storage = window.localstorage) {
    this.storage = storage;
    this.playthroughs = JSON.parse(storage.getItem('playthroughs'));
  }

  getPlaythroughsForTitle(title) {
    const playthroughsForTitle = this.playthroughs.filter(playthrough => {
      return playthrough.title === title;
    });

    return new Promise(resolve => resolve(playthroughsForTitle));
  }

  addPlaythrough(playthrough) {
    const playthroughs = [...this.playthroughs, playthrough];
    this.storage.setItem('playthroughs', JSON.stringify(playthroughs));
  
    return new Promise(resolve => resolve(playthrough));
  }
}