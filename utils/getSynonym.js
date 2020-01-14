const https = require('https')
const config = require('../config')
const request = require("request");

module.exports = async (word, n) => {

  const url = `https://${config.API_HOST}/word/${word}/relatedWords?api_key=${config.API_KEY}`;

  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    if (!json.error) {
      let synonyms;
      console.log(json)
      json.forEach(rt => {
        if (rt.relationshipType == 'synonym') {

          synonyms = rt.words;
        }
      })



      let i = 1;


      if (!n) {
        n = synonyms.length
      }
      console.log(`Synonyms of ${word}:`)
      synonyms.forEach(element => {
        if (i <= n) {
          wordSynonyms = i + ". " + element;

          console.log(wordSynonyms)
          i++;
        }
      });

    }
    else {
      console.log(json.error)
    }

  });

}
