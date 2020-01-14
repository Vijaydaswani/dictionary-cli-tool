const https = require('https')
const config = require('../config')
const request = require("request");
let word;
const getSynonym = require('../utils/getSynonym')
const getDefinition = require('../utils/getDefination')
const getExamples = require('../utils/getExamples')
const getAntonym = require('../utils/getAntonym')
module.exports = async (args) => {

  const url = `https://${config.API_HOST}/words/randomWord?api_key=${config.API_KEY}`;

  request.get(url, async (error, response, body) => {
    let json = JSON.parse(body);
    word = json.word;
    const wordNumber = args.n;

    if (!json.error) {
      console.log(`Word of the day is ${word}:
      `)
      console.log("Full Word Dictionary:")
      const synonym = await getSynonym(word, wordNumber)
      const example = await getExamples(word, wordNumber)
      const definition = await getDefinition(word, wordNumber)
      const antonym = await getAntonym(word, wordNumber)
      return word;
    }
    else {
      console.log(json.error)
    }
  });
  return word;

}

