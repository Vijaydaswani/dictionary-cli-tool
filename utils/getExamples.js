const https = require('https')
const config = require('../config')
const request = require("request");

module.exports = async (word, n) => {

  const url = `https://${config.API_HOST}/word/${word}/examples?api_key=${config.API_KEY}`;

  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    //  console.log(json);
    let examples = json.examples;


    let i = 1;
    //try {
    if (!json.error) {
      if (!n) {
        n = examples.length
      }
      console.log(`Examples of ${word}:`)
      examples.forEach(element => {
        if (i <= n) {
          wordExamples = i + ". " + element.text;

          console.log(wordExamples)
          i++;
        }
      });
    }
    else {
      console.log(json.error)
    }

  });

}
