const https = require('https')
const config = require('../config')
const request = require("request");

module.exports = async (word, n) => {

  const url = `https://${config.API_HOST}/word/${word}/relatedWords?api_key=${config.API_KEY}`;

  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    if (!json.error) {

      let antonym;
      json.forEach(rt => {
        if (rt.relationshipType == 'antonym') {

          antonym = rt.words;
        }

      })
      let i = 1;
      if (!n) {
        n = antonym.length
      }
      console.log(`Antonyms of ${word}:`)
      antonym.forEach(element => {
        if (i <= n) {
          wordAntonyms = i + ". " + element;

          console.log(wordAntonyms)
          i++;
        }
      });

    }
    else {
      console.log(json.error)
    }

  });

}
