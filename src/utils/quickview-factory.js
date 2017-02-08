import idToName from './id-to-name';

export default function toQuickview(progress) {
  const model = [];
  
  Object.keys(progress).forEach(key => {
    let quickview = {};

    quickview.name = idToName(key);

    if (progress[key] instanceof Array) {
      quickview.total = progress[key].length;
      quickview.found = progress[key].filter(x => x.found === true).length;
    }

    model.push(quickview);
  });

  return model;
}