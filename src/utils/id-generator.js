export function generateId(idCollection = []) {
  if (!(idCollection instanceof Array)) {
    throw new TypeError('idCollection is not an Array');
  }

  idCollection.forEach(id => {    
    if (typeof id !== 'number') {
      throw new TypeError('idCollection contains invalid id');
    }
  });

  if (idCollection.length === 0) {
    idCollection.push(0);
  }

  return  Math.max(...idCollection) + 1;
}
