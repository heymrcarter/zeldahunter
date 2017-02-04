export default function toQuickview(progress) {
  const model = [];
  const capitols = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  Object.keys(progress).forEach(key => {
    let quickview = {};

    quickview.total = progress[key].length;
    quickview.found = progress[key].filter(x => x.found === true).length;

    let name = '';
    const letters = key.split('');

    letters.forEach((letter, i) => {
      if (capitols.includes(letter)) {
        name += ' ';
      }

      if (i === 0) {
        letter = letter.toUpperCase();
      }

      name += letter;
    });

    quickview.name = name;

    model.push(quickview);
  });

  return model;
}