class TitleService {
  static getTitles() {   
    return new Promise((resolve, reject) => {
      const endpoint = process.env.ZH_TITLES_ENDPOINT;
      fetch(endpoint, {Accept: 'application/json'})
        .then(res => {
          return res.json();
        })
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  }
}

export default TitleService;