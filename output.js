const x = 1;
const y = 2;

// format variable to string
// %f
// %d
// %i
// %o

// console.log('I am %s and my age is %d',"dispesh",25);
// console.clear();//clear console


// console.count('I am aryan')
// console.count('I am aryan')
// console.count('I am sharma')
// console.countReset('I am aryan') // reseting the count with the same arguments
// console.count('I am aryan')

// const function1 = () => console.trace();
// const function2 = () => function1();
// function2();

const sum = () => console.log(`the sum of 2 and 3 is : ${(2+3)}`);
const multiply = () => console.log(`the multiplication of 2 and 3 is : ${(2*3)}`)


const measureTime = () => {
    console.time('sum');
    sum();
    console.timeEnd('sum');
    console.time('multiply');
    multiply();
    console.timeEnd('multiply');

}
measureTime();