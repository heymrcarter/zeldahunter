import idToName from './id-to-name';

export default function toProgressOverview(overallProgress) {
  let progressOverview = [];

  Object.keys(overallProgress).forEach(key => {
    let collectable = {};

    collectable.name = idToName(key);
    collectable.progress = [];

    if (overallProgress[key] instanceof Array) {
      overallProgress[key].forEach(item => {
        let progress = {};

        progress.name = idToName(item.id);
        progress.found = item.found;

        collectable.progress.push(progress);
      });
    }    

    progressOverview.push(collectable);
  });

  return progressOverview;
}