const https = require('https')
const config = require('../config')
const request = require("request");
let word;
const getSynonym = require('../utils/getSynonym')
const getDefinition = require('../utils/getDefination')
const getExamples = require('../utils/getExamples')
const getAntonym = require('../utils/getAntonym')
module.exports = async (word) => {

  const url = `https://${config.API_HOST}/words/randomWord?api_key=${config.API_KEY}`;

  request.get(url, async (error, response, body) => {
    let json = JSON.parse(body);
    word = json.word;


    if (!json.error) {
      console.log(`Word of the day is ${word}:
      `)

      const synonym = await getSynonym(word)
      const example = await getExamples(word)
      const definition = await getDefinition(word)
      const antonym = await getAntonym(word)
      return word;
    }
    else {
      console.log(json.error)
    }
  });
  return word;

}

