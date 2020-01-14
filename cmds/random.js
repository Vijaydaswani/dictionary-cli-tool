const ora = require('ora')

const getRandom = require('../utils/getRandom')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const word = args._[0] || args.w
    const wordNumber = args.n;
    console.log("Full Word Dictionary:")
    const random = await getRandom();


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