const ora = require('ora')
const getSynonym = require('../utils/getSynonym')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const word = args._[1] || args.w
    const synNumber = args.n;

    const synonym = await getSynonym(word, synNumber)

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