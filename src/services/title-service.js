class TitleService {
  static getTitles() {
    const titles = [
      {
        name: 'The Legend of Zelda',
        id: 'the-legend-of-zelda',
        description: `Welcome to the Legend of Zelda. Where the only sound you’ll hear is your own heart pounding as you race through forests, lakes, mountains and dungeonous mazes in an attempt to restore peace to the land of Hyrule. Along the way you’ll be challenged by Tektites, Wizzrobes and an endless array of ruthless creatures who’ll stop at nothing to prevent you from finding the lost fragments of the Triforce of Wisdom. But don’t despair. With a little luck and a lot of courage, you’ll conquer your adversaries, unite the Triforce fragments and unravel the mystery of the Legend of Zelda!`,
        releaseDate: '02/21/1986',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the-legend-of-zelda.png'
      },
      {
        name: 'Zelda II: The Adventure of Link',
        id: 'zelda-ii-the-adventure-of-link',
        description: `The land of Hyrule is in chaos. As Link, you’ll be sent on a treacherous journey to return six precious Crystals to their origins in six stone statues. Only by defeating the guardians of the six palaces will you gain passage to the seventh palace, take on the ultimate challenge that awaits you, and wake the Princess Zelda from her sleeping spell. On your way, helpful villagers you encounter will offer clues and secret messages invaluable in your quest. As you guide Link through the levels of Hyrule, close-ups and overviews will enhance your video vision. Are you up to the challenge?`,
        releaseDate: '09/26/1988',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/zelda-ii-the-adventure-of-link.png'
      },
      {
        name: 'The Legend of Zelda: A Link to the Past',
        id: 'the-legend-of-zelda-a-link-to-the-past',
        description: `Venture back to Hyrule and an age of magic and heroes. The predecessors of Link and Zelda face monsters on the march when a menacing magician takes over the kingdom. Only you can prevent his evil plot from shattering the land of Hyrule.

In your quest, you’ll venture into twisting mazes, dungeons, palaces and shadowy forests. Test your mettle with mighty swords and magical weapons. Or heft a boulder and hurl it at your enemies. If the going gets tough, dive into a river--you can swing to escape! Learn powerful spells, locate magical artifacts and solve the mysteries of the evil magician and the hidden realm of Hyrule.

This exciting Super NES sequel to the Legend of Zelda and The Adventure of Link uses 16-bit power to create a quest so colorful and detailed you don’t just play it, you live it!`,
        releaseDate: '04/13/1992',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the-legend-of-zelda-a-link-to-the-past.png'
      },
      {
        name: `The Legend of Zelda: Link's Awakening`,
        id: 'the-legend-of-zelda-links-awakening',
        description: `Nintendo's fantasy adventure hero, Link of Hyrule, returns in this new epic quest...Link's Awakening. Link's newest challenge is set on the mysterious Koholint Island, a place where dreams and reality collide. As a castaway, Link must find a way to escape from the island and return to his beloved homeland of Hyrule.

But it won't be as easy as chartering a boat. The island's inhabitants have no knowledge of the outside world. One creature, a talking Owl, may know the solution to Link's dilemma, but first Link must tackle eight dungeons full of treacherous monsters and tricky taps. His goal: find the eight Instruments of the Sirens and awaken the omnipotent Wind Fish which rules the island.
`,
        releaseDate: '06/06/1993',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_links_awakening.png'
      },
      {
        name: 'The Legend of Zelda: Ocarina of Time',
        id: 'the-legend-of-zelda-ocarina-of-time',
        description: `The Legend of Zelda: Ocarina of Time reveals the genesis of the fantasy land of Hyrule, the origin of the Triforce, and the tale of the first exploits of Princess Zelda and the heroic adventurer Link. Vibrant, real-time 3-D graphics transport you into the fantasy world of Hyrule. Your quest takes you through dense forests and across wind-whipped deserts. Swim raging rivers, climb treacherous mountains, dash on horseback across rolling hills, and delve into dungeons full of creatures that fight to the finish to put an end to your adventures. With immersive graphics, a sweeping story line, swashbuckling adventure, mind-bending puzzles, and a touch of humor, The Legend of Zelda: Ocarina of Time is one of Nintendo's most epic challenges ever.`,
        releaseDate: '11/21/1998',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the-legend-of-zelda-ocarina-of-time.png'
      },
      {
        name: `The Legend of Zelda: Majora's Mask`,
        id: 'the-legend-of-zelda-majoras-mask',
        description: `Link’s all-new epic adventure lands him in the mystical world of Termina, where ever-present clocks count down the hours until a menacing moon falls from the sky above. When his horse and Ocarina are stolen by a strange, masked figure, Link embarks on an urgent quest to solve the mystery of the moon, save the world from destruction, and find his way back to the peaceful land of Hyrule!`,
        releaseDate: '10/26/2000',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the-legend-of-zelda-majoras-mask.png'
      },
      {
        name: 'The Legend of Zelda: Oracle of Seasons',
        id: 'the-legend-of-zelda-oracle-of-season',
        description: `The land of Holodrum is slowly withering. Onox, the General of Darkness, has imprisoned the Oracle of Seasons and is draining the very life out of the land. With the seasons in tumult and the forces of evil running rampant, the world looks for a hero... and finds Link. His quest won't be easy - he'll have to master the seasons themselves if he's to turn back the evil tide.`,
        releaseDate: '05/14/2001',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_oracle_of_seaons.png'
      },
      {
        name: 'The Legend of Zelda: Oracle of Ages',
        id: 'the-legend-of-zelda-oracle-of-ages',
        description: `A pall of darkness has fallen over the land of Labrynna. The Sorceress of Shadows, Veran, has captured the Oracle of Ages and is using her power for the ways of evil. But hope is not lost… yet. Link has been summoned to Labrynna by the Triforce, and he’ll need to bend the very fabric of time to save the Oracle. And he must hurry, for time is running out…`,
        releaseDate: '05/14/2001',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_oracle_of_ages.png'
      },
      {
        name: 'The Legend of Zelda: The Wind Waker',
        id: 'the-legend-of-zelda-the-wind-waker',
        description: `The game is set on a group of islands in a vast sea—a first for the series. The player controls Link, the protagonist of the Zelda series. He struggles against his nemesis, Ganondorf, for control of a sacred relic known as the Triforce. Link spends a large portion of the game sailing, traveling between islands, and traversing through dungeons and temples to gain the power necessary to defeat Ganondorf. He also spends time trying to find his little sister.
The Wind Waker follows in the footsteps of Ocarina of Time and its sequel Majora's Mask, retaining the basic gameplay and control system from the two Nintendo 64 titles. A heavy emphasis is placed on using and controlling wind with a baton called the Wind Waker, which aids sailing and floating in air. Controversial during development for its use of cel shading graphics and younger Link character, The Wind Waker received acclaim on release and is one of the Nintendo GameCube's most popular games.`,
        releaseDate: '03/24/2003',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the-legend-of-zelda-the-wind-waker.png'
      },
      {
        name: 'The Legend of Zelda: Four Swords Adventures',
        id: 'the-legend-of-zelda-four-swords-adventures',
        description: `The game begins with the land of Hyrule in a state of fear because of strange happenings that have occurred recently. On a stormy night, Princess Zelda and the shrine maidens fear that the reason for these events is that Vaati's seal is weakening. She summons Link and brings him to the castle so he can protect her and the other maidens while they open the portal to the Four Sword Sanctuary. When they do, however, a shadowy figure appears from the portal. This figure was Shadow Link, who then kidnapped the shrine maidens and sealed them in crystals. Link follows him to the sanctuary where he retrieves the Four Sword to destroy this doppelganger. The Four Sword is a magical sword that splits the wielder into three clones of himself. Vaati is once again released and wreaks havoc on the once peaceful kingdom.`,
        releaseDate: '06/07/2004',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_four_swords_adventures.png'
      },
      {
        name: 'The Legend of Zelda: The Minish Cap',
        id: 'the-legend-of-zelda-the-minish-cap',
        description: `Link returns in an all-new Game Boy Advance adventure. When the sorcerer Vaati turns Princess Zelda to stone, the king of Hyrule sends Link on a quest that takes him to all-new locations. Using the power of a mystical hat called the Minish Cap, Link must travel through a fantastic world rife with new items, puzzles, and bosses. As Link, you can shrink down to either battle large enemies from within or find secret items. You can also unlock items and solve puzzles by fusing together magic relics.`,
        releaseDate: '01/10/2005',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_the_minish_cap.png'
      },
      {
        name: 'The Legend of Zelda: Twilight Princess',
        id: 'the-legend-of-zelda-twilight-princess',
        description: `Link, a young man raised as a wrangler in a small, rural village, is ordered by the mayor to attend the Hyrule Summit. He sets off, oblivious to the dark fate that has descended upon the kingdom. When he enters the Twilight Realm that has covered Hyrule, he transforms into a wolf and is captured. A mysterious figure named Midna helps him break free, and with the aid of her magic, they set off to free the land from the shadows. Link must explore the vast land of Hyrule and uncover the mystery behind its plunge into darkness.`,
        releaseDate: '11/19/2006',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_twilight_princess.png'
      },
      {
        name: 'The Legend of Zelda: Phantom Hourglass',
        id: 'the-legend-of-zelda-phantom-hourglass',
        description: `The game follows the adventures of Link and Tetra, the leader of a band of pirates, as they discover a ghost ship in dense fog. Link falls into the ocean when Tetra gets into trouble, and he wakes up alone on the shore of a mysterious island. Throughout the game, Link collects sand for his Phantom Hourglass, which allows him to explore deeper and deeper into a time-limited dungeon in his quest to find Tetra.
`,
        releaseDate: '10/01/2007',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_phantom_hourglass.png'
      },
      {
        name: 'The Legend of Zelda: Spirit Tracks',
        id: 'the-legend-of-zelda-spirit-tracks',
        description: `For the first time in the 23-year history of The Legend of Zelda series, Princess Zelda is leaving the villainous clutches of the underworld behind and joining the adventure with Link. In The Legend of Zelda: Spirit Tracks, the spirit of Zelda accompanies Link on his quest to save Hyrule. Directly impacting game play like never before, Zelda's spirit can take control of hulking suits of armor known as Phantoms, allowing the player to direct both Link and these new allies as they battle enemies, solve puzzles and uncover secrets. Zelda also rides alongside Link on his customizable train, offering wisdom that will help players find new areas, storylines and items. The team of Link and Zelda presents countless new storyline details for fans to enjoy, including a closer look at Princess Zelda herself, one of the most iconic video game characters of all-time.`,
        releaseDate: '12/07/2009',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_spirit_tracks.png'
      },
      {
        name: 'The Legend of Zelda: Skyward Sword',
        id: 'the-legend-of-zelda-skyward-sword',
        description: `One of the most storied franchises in history soars to new heights. The Legend of Zelda™: Skyward Sword shakes up the tried-and-true adventure game formula and marks a turning point for the franchise. The introduction of full motion controls to the series enabled by Wii MotionPlus™ technology enhances player movements while offering the most intuitive play control of any game in the series to date.`,
        releaseDate: '11/20/2011',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_skyward_sword.png'
      },
      {
        name: 'The Legend of Zelda: A Link Between Worlds',
        id: 'the-legend-of-zelda-a-link-between-worlds',
        description: `Following the events of A Link to the Past, the royal family of Hyrule elected to split the triforce to stop evil from rising again. This had the effect of returning each part to its elected owner. One part returned to the deceased demon king Ganon, one part stayed with the Royal family, and a third part took its rightful place in the heart of the hero eternal.`,
        releaseDate: '11/22/2013',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_a_link_between_worlds.png'
      },
      {
        name: 'The Legend of Zelda: Tri Force Heroes',
        id: 'the-legend-of-zelda-tri-force-heroes',
        description: `Grab two friends* and prepare for a bold, new Legend of Zelda adventure! Each of you will play as Link, working together to conquer inventive dungeons and bosses. For the first time, stack three Links into a totem to solve puzzles and defeat enemies. Don’t forget to pick an outfit to wear— each one offers a different boost or ability!

All three players share a life gauge! So you’ll have to work with your fellow Links to defeat enemies and solve puzzles. Or go it alone! In single-player, control Link and two paper dolls in the same dungeons from multiplayer mode. Each one contains four separate areas, not to mention epic boss battles with layered strategies. Counter with your own layered strategy: stack three Links with the totem mechanic to reach new heights. But remember to dress for success! Unique outfits include the Legendary Dress, which increases your chance of finding hearts, while the Kokiri Clothes, lets you shoot three arrows at once. Good things come in threes!`,
        releaseDate: '10/23/2015',
        logo: 'https://s3.us-east-2.amazonaws.com/zeldahunter-dev/the_legend_of_zelda_tri_force_heroes.png'
      }
    ];

    return new Promise(resolve => {
      resolve(Object.assign([], titles));
    });
  }
}

export default TitleService;
