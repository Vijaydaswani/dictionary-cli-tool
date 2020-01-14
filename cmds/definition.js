const ora = require('ora')
const getDefinition = require('../utils/getDefination')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const word = args._[1] || args.w
    const defNumber = args.n;

    const definition = await getDefinition(word, defNumber)
    setTimeout(function () {
      spinner.stop()
    }, 500)


    console.log(`Definitions of ${word}:`)
    //  console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}