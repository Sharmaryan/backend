const error = new Error('something went wrong');
// console.log(error.stack);
// console.log(error.message);

// throw new Error('I am error object');

const { CustomError } = require('./CustomError');

// throw new CustomError('this is a custom error object')

function doSomething() {
    const data = fetch('localhost:3000/api');
    console.log('i am from do function')
    // return "i am from do function"
}

// try {
//     doSomething()
// }catch(err){
//     console.log('error occured');
//     console.log(err);
// }



// uncaught exception

// process.on('uncaughtException', (error) => {
//     console.log('there was an uncaughtexception')
//     process.exit(1);
// });

// doSomething();

// Exception with promise

// const promise = new Promise((resolve, reject) => {
//     if (true)
//         resolve(doSomething())
//     else
//         resolve(doSomething())
// })


// promise.then((value) => console.log(value)).catch((err) => {
//     console.log('error occured')
//     console.log(err);
// }
// )


// Exccception with async await

const someFunction = async () => {
    try {
        await doSomething();
    } catch (err) {
        throw new CustomError(err.message);
    }
}

someFunction();



