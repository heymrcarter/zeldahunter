class TitleService {
  static getTitles() {
    const titles = [
      {
        name: 'The Legend of Zelda',
        id: 'the-legend-of-zelda',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'Zelda II: The Adventure of Link',
        id: 'zelda-ii-the-adventure-of-link',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: A Link to the Past',
        id: 'the-legend-of-zelda-a-link-to-the-past',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: `The Legend of Zelda: Link's Awakening`,
        id: 'the-legend-of-zelda-links-awakening',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: Ocarina of Time',
        id: 'the-legend-of-zelda-ocarina-of-time',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: `The Legend of Zelda: Majora's Mask`,
        id: 'the-legend-of-zelda-majoras-mask',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: Oracle of Ages',
        id: 'the-legend-of-zelda-oracle-of-ages',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: Oracle of Seasons',
        id: 'the-legend-of-zelda-oracle-of-seasons',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: The Wind Waker',
        id: 'the-legend-of-zelda-the-wind-waker',
        description: `The game is set on a group of islands in a vast sea—a first for the series. The player controls Link, the protagonist of the Zelda series. He struggles against his nemesis, Ganondorf, for control of a sacred relic known as the Triforce. Link spends a large portion of the game sailing, traveling between islands, and traversing through dungeons and temples to gain the power necessary to defeat Ganondorf. He also spends time trying to find his little sister.
The Wind Waker follows in the footsteps of Ocarina of Time and its sequel Majora's Mask, retaining the basic gameplay and control system from the two Nintendo 64 titles. A heavy emphasis is placed on using and controlling wind with a baton called the Wind Waker, which aids sailing and floating in air. Controversial during development for its use of cel shading graphics and younger Link character, The Wind Waker received acclaim on release and is one of the Nintendo GameCube's most popular games.`,
        releaseDate: '03/24/2003',
        logo: '	https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the-legend-of-zelda-the-wind-waker.png'
      },
      {
        name: 'The Legend of Zelda: Four Swords Adventures',
        id: 'the-legend-of-zelda-four-swords-adventures',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: The Minish Cap',
        id: 'the-legend-of-zelda-the-minish-cap',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: Twilight Princess',
        id: 'the-legend-of-zelda-twilight-princess',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: Phantom Hourglass',
        id: 'the-legend-of-zelda-phantom-hourglass',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: Spirit Tracks',
        id: 'the-legend-of-zelda-spirit-tracks',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: Skyward Sword',
        id: 'the-legend-of-zelda-skyward-sword',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: A Link Between Worlds',
        id: 'the-legend-of-zelda-a-link-between-worlds',
        description: '',
        releaseDate: '',
        logo: ''
      },
      {
        name: 'The Legend of Zelda: Tri Force Heroes',
        id: 'the-legend-of-zelda-tri-force-heroes',
        description: '',
        releaseDate: '',
        logo: ''
      }
    ];

    return new Promise(resolve => {
      resolve(Object.assign([], titles));
    });
  }
}

export default TitleService;
