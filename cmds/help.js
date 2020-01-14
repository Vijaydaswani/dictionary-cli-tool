const menus = {
  main: `
    dict [command] <word>

    defn .............. Display definitions of a given word
    syn .............. Display synonyms of a given word
    ant .............. Display antonyms of a given word
    ex .............. Display examples of a given word
    play ............ Play a word game.
    version ............ Display tool version
    help ............... Display help menu for a command
    
    ` ,

  word: `
    dict word <options>

    --ex, -e ..... for the examples`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}