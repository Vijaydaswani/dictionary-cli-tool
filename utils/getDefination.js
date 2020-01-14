const https = require('https')
const config = require('../config')
const request = require("request");

module.exports = async (word, n) => {

  const url = `https://${config.API_HOST}/word/${word}/definitions?api_key=${config.API_KEY}`;



  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    //  console.log(json);

    let i = 1;
    //try {
    if (!json.error) {
      if (!n) {
        n = json.length
      }

      json.forEach(element => {
        if (i <= n) {
          console.log(i + ". " + element.text)
          i++;
        }
      });
    }
    else {
      return json.error
    }
    //} catch (e) {
    // console.log(json.error || e)
    // }
  });

}


/*

module.exports = async (word) => {
  const options = {
    hostname: config.API_HOST,
    port: 443,
    path: '/word/' + word + '/definitions?api_key=' + config.API_KEY,
    method: 'GET'
  }
  var def = {};
  let body = "";
  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
      body += d;

    })
    console.log(body)
  })

  req.on('error', (error) => {
    console.error(error)
  })

  req.end()
}*/