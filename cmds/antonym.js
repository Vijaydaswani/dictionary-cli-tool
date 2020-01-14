const ora = require('ora')
const getAntonym = require('../utils/getAntonym')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const word = args._[1] || args.w
    const antNumber = args.n;

    const synonym = await getAntonym(word, antNumber)

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