const capitols = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export default function idToName(id) {
  let name = '';
  let letters = id.split('');
  let shouldCapitolize = false;
  let capitolize;

  letters.forEach((letter, i) => {
    if (capitols.includes(letter)) {
      name += ' ';
    }

    if (i === 0) {
      shouldCapitolize = true;
    }

    if (letter === '-') {
      letter = ' ';
    }

    if (letter === ' ') {
      capitolize = i + 1;
    }

    if (capitolize === i) {
      shouldCapitolize = true;
    }

    if (shouldCapitolize) {
      letter = letter.toUpperCase();
      shouldCapitolize = false;
    }

    name += letter;   
  });

  return name;
}