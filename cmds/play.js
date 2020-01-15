const ora = require('ora')
const getSynonym = require('../utils/getSynonym')
const inquirer = require('inquirer')

const getRandom = require('../utils/getRandom')

module.exports = async (args) => {
  console.log(`
  *****************Welcome to the word Game*****************
  `)


  /*var questions = [{
    type: 'input',
    name: 'name',
    message: "What's your name?",
  }]

  inquirer.prompt(questions).then(answers => {
    console.log(`Hi ${answers['name']}!`)

  })*/
  try {
    const word = args._[1] || args.w
    const count = 1;
    const game_flag = true;
    //const synonym = await getSynonym(word, synNumber)
    const random = await getRandom(null, count, game_flag)

    /* setTimeout(function () {
       spinner.stop()
     }, 500)
  */



    //  console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
  } catch (err) {
    // spinner.stop()

    console.error(err)
  }


}
//const spinner = ora().start()





/*
/word/{word}/relatedWords?api_key={api_key}
*/