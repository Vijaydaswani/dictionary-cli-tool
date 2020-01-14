const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
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



    default:
      require('./cmds/dictionary')(args)
      // console.error(`"${cmd}" is not a valid command!`)
      break
  }
}