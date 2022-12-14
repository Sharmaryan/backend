// console.log(process.argv.slice(2)[0]);

// process.argv.forEach((value, index) => {
//     console.log(`${index}:${value}`);
// })
const minimist = require('minimist');

const argNew = minimist(process.argv.slice(2));
console.log(argNew.name);