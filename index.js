const minimist = require('minimist')


module.exports = () => {



  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'word'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }
  if (args.word || args.w) {
    cmd = 'help'
  }


  switch (cmd) {
    case 'defn':
      require('./cmds/definition')(args)
      break

    case 'version':
      require('./cmds/version')(args)
      break

    case 'help':
      require('./cmds/help')(args)
      break

    case 'ant':
      require('./cmds/antonym')(args)
      break

    case 'syn':
      require('./cmds/synonym')(args)
      break

    case 'ex':
      require('./cmds/example')(args)
      break

    case 'word':
      require('./cmds/random')(args)
      break
    case 'play':
      require('./cmds/play')(args)
      break

    default:
      require('./cmds/dictionary')(args)

      break
  }
}