const ora = require('ora')
const getSynonym = require('../utils/getSynonym')
const getDefinition = require('../utils/getDefination')
const getExamples = require('../utils/getExamples')
const getAntonym = require('../utils/getAntonym')
module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const word = args._[0] || args.w
    const wordNumber = args.n;
    console.log("Full Word Dictionary:")
    const synonym = await getSynonym(word, wordNumber)
    const example = await getExamples(word, wordNumber)
    const definition = await getDefinition(word, wordNumber)
    const antonym = await getAntonym(word, wordNumber)

    setTimeout(function () {
      spinner.stop()
    }, 500)




    //  console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}



/*
/word/{word}/relatedWords?api_key={api_key}
*/