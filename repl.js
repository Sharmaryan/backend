// Read Evaluate Print Loop
// REPL 

const repl = require('repl');
const local = repl.start('$');

local.on('exit',() => {
    console.log('exiting REPL')
    process.exit()
})