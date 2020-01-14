const menus = {
  logo: ` `,
  main: `
    Dictionary cli tool : Assignment By Vijay Daswani
    ________________________________________________________
    dict [command] <word>

    defn .............. Display definitions of a given word
    syn .............. Display synonyms of a given word
    ant .............. Display antonyms of a given word
    ex .............. Display examples of a given word
    play ............ Play a word game.
    version ............ Display tool version
    help ............... Display help menu for a command
    __________________________________________________________

    dict [command] <options>

    -n ..... Number of results
    ` ,

  defn: `
    dict defn <word> <options> <number>

    -n ..... Number of results`,
  ant: `
    dict ant <word> <options> <number>

    -n ..... Number of results`,
  syn: `
    dict syn <word> <options> <number>

    -n ..... Number of results`,
  ex: `
    dict ex <word> <options> <number>

    -n ..... Number of results`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}