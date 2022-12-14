// const readline = require('readline');
const _ = require('lodash');

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// rl.question('What is your name?', name => {
//     console.log(`Hi ${name}`)
//     rl.close();
// })

// divide into chunk using lodash

// const chunks = _.chunk([1,2,3,4]);
// console.log(chunks);

const cowsay = require('cowsay');
console.log(cowsay.say({
    text : 'I am learning npm module',
    e:'00',
    t:"U"
}))