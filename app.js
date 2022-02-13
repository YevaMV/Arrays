// push(), pop(), unshift(), shift()

const hobbies = ['sports', 'cooking'];
hobbies.push('reading');
hobbies.unshift('coding');
const poppedValue = hobbies.pop();
console.log(poppedValue);
hobbies.shift();
console.log(hobbies);



// splice() del or add elements

hobbies.splice(1, 0, 'singing'); // add
console.log(hobbies);
const delEl = hobbies.splice(1, 1) // delete, negative index(-1) / last item
console.log(delEl);



//slice() copy array, select part of array

let testResults = [1, 7, 1.5, -10, 8, 15];
let storedResults = testResults.slice(); // copy

let selected = testResults.slice(0, 2);
console.log(selected) //[1, 7] not include 2, 

let selNeg = testResults.slice(-3, -1) //negative index(-1) / last item
console.log(selNeg) // [-10, 8]

let oneArg = testResults.slice(2) // from 2 to th end
console.log(oneArg) // [1.5, -10, 8, 15]



//concat()  adding elements or arrays at the end of array and returning new array

let concatTestResults = testResults.concat(5, 10, 5);
console.log(concatTestResults); // [1, 7, 1.5, -10, 8, 15, 5, 10, 5];

let concatArray = concatTestResults.concat([7, 9, 100])
console.log(concatArray) // [1, 7, 1.5, -10, 8, 15, 5, 10, 5, 7, 9, 100]



// indexOf() & lastIndexOf()

console.log(concatTestResults.indexOf(5)) //6 first element, second argument starting index
console.log(testResults.indexOf(21)) // -1 

// lastIndexOf a-starting from the right

let user = [{name: 'Yeva'}];
console.log(user.indexOf({name: 'Yeva'})) // -1
// indexOf won't work with objects