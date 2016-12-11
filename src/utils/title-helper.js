export function titleNameToUrl(title) {
  return title.toLowerCase().replace(/ /g, '-').replace('\'', '').replace(':', '');
}
