const ora = require('ora')
const getExamples = require('../utils/getExamples')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const word = args._[1] || args.w
    const exampleNumber = args.n;

    const example = await getExamples(word, exampleNumber)

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