export default function extractIds(collection = []) {
  if (!(collection instanceof Array)) {
    throw new TypeError('collection must be an Array');
  }

  const ids = [];

  collection.forEach(obj => {
    if (obj.id && typeof obj.id === 'number') {
      ids.push(obj.id);
    }    
  });

  return ids;
}