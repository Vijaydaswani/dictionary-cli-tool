const https = require('https')
const config = require('../config')
const request = require("request");
const inquirer = require('inquirer')
var shuffle = require('shuffle-words');
module.exports = async (word, game_flag, n) => {

  const url = `https://${config.API_HOST}/word/${word}/relatedWords?api_key=${config.API_KEY}`;

  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    if (!json.error) {
      let synonyms;

      json.forEach(rt => {
        if (rt.relationshipType == 'synonym') {

          synonyms = rt.words;
        }
      })

      let i = 1;
      if (game_flag == true) {
        console.log(`Find the synonym of a word, Guess the word or any of the other synonym!!!
        `)

        console.log("Below two lines are removed from the actual code.")
        //   console.log(`Actual word: ${word}`)
        // console.log(`Synonyms of the words : ${synonyms}`);
        var synonym = synonyms[Math.floor(Math.random() * synonyms.length)];
        var questions = [{
          type: 'input',
          name: 'word',
          message: `
          
          Guess the word similar to :  ${synonym}
          
          `,
        }]

        inquirer.prompt(questions).then(answers => {
          if (answers['word'] == word || synonyms.some(item => item === answers['word'])) {
            console.log(`${answers['word']} is correct!`)
          }
          else {
            console.log(`Your answer was incorrect
            
                        1. Try Again?
                        2. Hint?
                        3. Quit
            `)
            var questions = [{
              type: 'input',
              name: 'choice',
              message: `Enter your choice.`,
            }]

            inquirer.prompt(questions).then(choice => {

              if (choice.choice == 1) {
                var questions = [{
                  type: 'input',
                  name: 'word',
                  message: `
                  
                  Try again to Guess the word similar to : ${synonym}
                  
                  `,
                }]

                inquirer.prompt(questions).then(answers => {
                  if (answers['word'] == word || synonyms.some(item => item === answers['word'])) {
                    console.log(`${answers['word']} is correct!`)
                  }
                  else {
                    console.log("Wrong Answer again, Thanks for playing.")
                  }
                })

              }

              if (choice.choice == 2) {
                var hint = shuffle(word, true);
                console.log(`
                
                HINT: Shuffle of the actual word :   ${hint}
                
                `)
                var questions = [{
                  type: 'input',
                  name: 'word',
                  message: `Try again after hint to Guess the word similar to : ${synonym}`,
                }]

                inquirer.prompt(questions).then(answers => {
                  if (answers['word'] == word || synonyms.some(item => item === answers['word'])) {
                    console.log(`${answers['word']} is correct!`)
                  }
                  else {
                    console.log("Wrong Answer again, Thanks for playing.")
                  }
                })

              }

              if (choice.choice == 3) {

                console.log("Thanks for playing")
                return;

              }
            })

          }
        })

      }
      else {

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
    }
    else {
      console.log(json.error)
    }

  });

}
