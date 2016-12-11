class TitleService {
  static getTitles() {
    const titles = [
      {name: 'The Legend of Zelda', id: 'the-legend-of-zelda'},
      {name: 'Zelda II: The Adventure of Link', id: 'zelda-ii-the-adventure-of-link'},
      {name: 'The Legend of Zelda: A Link to the Past', id: 'the-legend-of-zelda-a-link-to-the-past'},
      {name: `The Legend of Zelda: Link's Awakening`, id: 'the-legend-of-zelda-links-awakening'},
      {name: 'The Legend of Zelda: Ocarina of Time', id: 'the-legend-of-zelda-ocarina-of-time'},
      {name: `The Legend of Zelda: Majora's Mask`, id: 'the-legend-of-zelda-majoras-mask'},
      {name: 'The Legend of Zelda: Oracle of Ages', id: 'the-legend-of-zelda-oracle-of-ages'},
      {name: 'The Legend of Zelda: Oracle of Seasons', id: 'the-legend-of-zelda-oracle-of-seasons'},
      {name: 'The Legend of Zelda: The Wind Waker', id: 'the-legend-of-zelda-the-wind-waker'},
      {name: 'The Legend of Zelda: Four Swords Adventures', id: 'the-legend-of-zelda-four-swords-adventures'},
      {name: 'The Legend of Zelda: The Minish Cap', id: 'the-legend-of-zelda-the-minish-cap'},
      {name: 'The Legend of Zelda: Twilight Princess', id: ''},
      {name: 'The Legend of Zelda: Phantom Hourglass', id: 'the-legend-of-zelda-phantom-hourglass'},
      {name: 'The Legend of Zelda: Spirit Tracks', id: 'the-legend-of-zelda-spirit-tracks',},
      {name: 'The Legend of Zelda: Skyward Sword', id: 'the-legend-of-zelda-skyward-sword'},
      {name: 'The Legend of Zelda: A Link Between Worlds', id: 'the-legend-of-zelda-a-link-between-worlds'},
      {name: 'The Legend of Zelda: Tri Force Heroes', id: 'the-legend-of-zelda-tri-force-heroes'}
    ];

    return new Promise(resolve => {
      resolve(Object.assign([], titles));
    });
  }
}

export default TitleService;
