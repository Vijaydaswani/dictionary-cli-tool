const ora = require('ora')

const getRandom = require('../utils/getRandom')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const word = args._[0] || args.w
    const wordNumber = args.n;

    const random = await getRandom(args);


    setTimeout(function () {
      spinner.stop()

    }, 500)



  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}


