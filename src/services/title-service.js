class TitleService {
  static getTitles() {
    const titles = [
      'The Legend of Zelda',
      'Zelda II: The Adventure of Link',
      'The Legend of Zelda: A Link to the Past',
      `The Legend of Zelda: Link's Awakening`,
      'The Legend of Zelda: Ocarina of Time',
      `The Legend of Zelda: Majora's Mask`,
      'The Legend of Zelda: Oracle of Ages',
      'The Legend of Zelda: Oracle of Seasons',
      'The Legend of Zelda: The Wind Waker',
      'The Legend of Zelda: Four Swords Adventures',
      'The Legend of Zelda: The Minish Cap',
      'The Legend of Zelda: Twilight Princess',
      'The Legend of Zelda: Phantom Hourglass',
      'The Legend of Zelda: Spirit Tracks',
      'The Legend of Zelda: Skyward Sword',
      'The Legend of Zelda: A Link Between Worlds',
      'The Legend of Zelda: Tri Force Heroes'
    ];

    return new Promise(resolve => {
      resolve(Object.assign([], titles));
    });
  }
}

export default TitleService;
