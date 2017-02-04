export default function toQuickview(progress) {
  const model = [];
  
  Object.keys(progress).forEach(key => {
    let quickview = {};

    quickview.total = progress[key].length;
    quickview.found = progress[key].filter(x => x.found === true).length;
    
    const first = key.substr(0, 1).toUpperCase();
    const rest = key.substr(1);

    quickview.name = `${first}${rest}`;

    model.push(quickview);
  });

  return model;
}