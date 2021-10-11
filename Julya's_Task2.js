Урок 2 задачи от Юли с решением

//Solve a task with logical operators in such a way as on example:

//Example:
let chocolate = true;
let strawberry = false;
let apple = true;
let caramel = true;

// case 1: I want ((strawberry and chocolate) or apple) or no caramel
let icecream = ((strawberry && chocolate) || apple) || !caramel;
console.log("case 1: " + icecream);

// case 2: I want (strawberry and (chocolate or apple)) or without caramel
icecream = (strawberry && (chocolate || apple)) || !caramel;
console.log("case 2: " + icecream);

//TASKS:

console.log("===Task#1===========================================");
//1. case 1: I want pizza and pasta and (no capers or no tomatos);
//=> the result is false
//  case 2: I want ((pizza and tomatos) or (pasta and  capers and no tomatos));
//  => the result is true

let pizza = true;
let pasta = false;
let capers = true;
let tomatos = true;
//let firstOrder = (pizza && pasta) && (!capers || !tomatos)

console.log(true && false && (!true || !true));
console.log((true && true) || (false && true && !true));


console.log("case1: " + (pizza && pasta) && (!capers || !tomatos));
console.log("case2: " + (pizza && tomatos) || (pasta && capers && !tomatos));


console.log("===Task#2===========================================");
//2. case 1: (Number a is bigger than number b)
//and b is not equal to 0 or a is not negative number; => the result is true
//   case 2: (Number a is a positive number or number b is a positive number)
//or b is not equal to 0 and a is equal to 7; => the result is true

let a = 5;
let b = 7;

case1:
    console.log("case1: " + (a > b) && (b !== 0) || (a >= 0));

case2:
    console.log("case2: " + (a > 0 || b > 0) || b !== 0 && a === 7);


console.log("===Task#3===========================================");
//3. case 1: (Data type of 'one' is a string and
// (data type of 'two' is a boolean or number))
// and data type of three is not a boolean => the result is false
// case 2: (Data type of 'one' is a number and data type of 'two' is boolean)
// or (data type of 'three' is not a boolean or data type of one is not a string)
//   => the result is true

let one = 0;
let two = 'Hello';
let three = true;
let dateType1 = typeof one === 'string' && (typeof two === 'boolean' || typeof two === 'number' ) && typeof three !== 'boolean';
let dateType2 = (typeof one === "number" && typeof two === 'boolean') || (typeof three !== 'boolean' !== 'string');

console.log('case1: ' + dateType1);
console.log('case2: ' + dateType2);


console.log("===Task#4===========================================");
//4. case 1: (The new building has 9 windows or a door)
// and the guest name is John or the address has a data type of a boolean
//  => the result is true
//   case 2: The new building has 8 windows or
// (no door and the guest name is John)
// or the address has a data type of a number => the result is true

let windows = 8;
let door = true;
let guest = 'John';
let address = 5;
let building1 = (windows = 9 || door) && guest == 'John' || typeof address == 'boolean';
let building2 = (windows = 8 || !door) && guest == 'John' || typeof address == 'number';
console.log('case1: ' + building1);
console.log('case2: ' + building2);


console.log("===Task#5===========================================");
//5. Find what char is bigger 'G' or 'g';

console.log('G'.charCodeAt() < 'g'.charCodeAt());
console.log('G' < 'g');


console.log("===Task#6===========================================");
//6. Find what char is smaller 'K' or 'a';

console.log('K'.charCodeAt() < 'a'.charCodeAt());
console.log('K' < 'a');


console.log("===Task#7===========================================");
//7. Find what is smaller true or false;
console.log(true > false);


console.log("===Task#8===========================================");
//8. Transfer 7 to boolean

let number = 7;
number = !!number;
console.log(number);
console.log(typeof number);


console.log("===Task#9===========================================");
//9. Chack a number 66 is odd or even;

let a1 = 66;
console.log(`Even ${a1 % 2 == 0}`);

let num66 = 66;
let odd = num66 % 2 > 0;
let even = num66 % 2 == 0;

console.log(odd);
console.log(even);

let m = 66;
let remainderOfDivision = m % 2;
if (remainderOfDivision === 0){
    console.log('m is even');
} else
    console.log('m is odd');


console.log("===Task#10==========================================");
//10.Chack a number 166 is odd or even;

let m1 = 166;
console.log(`Even ${m1 % 2 == 0}`);






