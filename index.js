const path = require('path');

const filePath = "./files/sample.txt"
const fs = require('fs');
const fsPromise = require('fs').promises;


// console.log('node js tutorial for beginners');
// require('./files/sample.txt')
// console.log('testing nodemon')

// process.exit(0);

// exit programmatically
// process.exit(1)
// process.exit = 1;


// explore path module


// // dirname
// console.log(path.dirname(filePath));
// // console.log(__dirname);
// // // basename
// console.log(path.basename(filePath));
// // console.log(__filename)
// // // extension
// console.log(path.extname(filePath));

// const sampleFile = 'sample.txt'
// console.log(path.join(path.dirname(filePath),sampleFile ))

// file system

// Reading from a file - async
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) throw new Error('something went wrong');
//     console.log(data);
// });


// try {
//     const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"),'utf-8')
//     console.log(data)

// }
// catch (err) {
//     console.log(err)
// }

// const fileReading = async() => {
//     try{
//         const data = await fsPromise.readFile(filePath,{encoding:'utf-8'})
//         console.log("fs promises:",data);
//     }
//     catch(err){
//         console.log(err)
//     }

// }

// fileReading();






