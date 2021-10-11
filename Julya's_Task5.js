//---------------------LESSON 5 HW-------------------

//https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

//----------------------- Task 1.-------------------------

// 1. Add a new element to on zero index in the array

// 2. Add a new element to end of the array

// 3. Remove last element of the array

// 4. Remove the first el of the array

console.log("===Task#1.1===========================================");

const animals = ['pig', 'goat', 'sheep'];

console.log(animals.unshift('cow'));
console.log(animals);

console.log("===Task#1.2===========================================");

console.log(animals.push('cock'));
console.log(animals);

console.log("===Task#1.3===========================================");

console.log(animals.pop());
console.log(animals);

console.log("===Task#1.4===========================================");

console.log(animals.shift());
console.log(animals);


//--------------------------------- Task 2.--------------------
//1. Create an array from an existing one
//   without mutating the first one array

console.log("===Task#2===========================================");

// const animals2 = new Array(...animals);
// console.log(animals2);

//or

const animals2 = [...animals];
console.log(animals2);

//--------------------------------- Task 3.--------------------
// 1. Creates a new array with values from 0 to 10
// using as much ways as you can

console.log("===Task#3===========================================");

const arr11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr10 = Array.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr11);
console.log(arr10);
console.log(Array.from(Array(11).keys()));
console.log([...Array(11).keys()]);

//--------------------------------- Task 4.--------------------

//1. Create an array with any values

console.log("===Task#4.1===========================================");

const arr5 = [9, 8, 7, 6, 5];

//2. Create a second array and
//asigne to this second array a value of a first array without changing the first one
//print both arrays to the console

console.log("===Task#4.2===========================================");

const arr6 = [...arr5];

console.log(arr5);
console.log(arr6);











