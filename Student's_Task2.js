//  LESSON 2:
console.log("===Task#1===========================================");
//1. Task
// You were paid 5000 in January, and in February you were paid 20% more.
//Count your total payment, print in console the type of the total payment,
//and print in console concatenation of string "I have " and the total payment.
//You want to buy a new car.
//Create a variable with the car cost 20000.
//Then create a string with the name “question” and value "Can I buy Nissan for ".
//Create a variable of Boolean data type with value where you
//compare your total pay and the car cost.
//Print in console the sentence using concatenation of your variables
// in order to have output in console you will
//see “Can I buy Nissan for my payment for two months ?”).
//The last step – print in console your comparison variable.

let priceJanuary = 5000;
let priceFebriary = 5000 * 0.2 + priceJanuary;
let total = priceJanuary + priceFebriary;
console.log(`I have $${total}` );
let car = 20000;
let question = "Can I buy Nissan for two month?"
let comparison = total >= car;

console.log(`${question} $${total}?`);
console.log( comparison );


console.log("===Task#2===========================================");
//2. Task
// A warehouse has 1500 boxes with size 24 x 24 x 12”
//and 2000 boxes with size 24 x 18 x 12”.
//It needs to pack some goods with a volume of 15 000 cubic feet.
//Print in console true if the warehouse has enough boxes to pack all the goods,
//or false if it doesn’t have enough boxes.

let sizeBox1 = 24 * 24 * 12;
let amountOfBoxes1 =  1500;
let sizeBox2 = 24 * 18 * 12;
let amountOfBoxes2 =  2000;
let volumeBoxesInch = sizeBox1 * amountOfBoxes1 + sizeBox2 * amountOfBoxes2;
let cubicFoot = 12 **3;
let volumeBoxesFeet= volumeBoxesInch / cubicFoot;
let goodsVolume = 15000;
console.log(volumeBoxesFeet >= goodsVolume);


console.log("===Task#3===========================================");
//3. Task
// Определить вес символа под индексом 2  в строке “I love JavaScript”.
// В консоли вывести букву индекса который будет равно весу символа
// ( пример результата “ n = 120”)

let str = 'I love JavaScript';
let s = str[2];
console.log(s);
let weihtOfSimbol = str.charCodeAt(2);
console.log( ` ${s} = ${weihtOfSimbol}` );

// let srt = "I love JavaScript";
// let index = 2;
// console.log(srt[index] +"=" +srt.charCodeAt(index));


console.log("===Task#4===========================================");
//4. Task
// Using the charCodeAt method, finds out which codes have English uppercase and lowercase letters.
//Print in the console: "English capital letters have a code starting with "firstLetterUp"
//and end with "lastLetterUp"."
//and "English lowercase letters have a code starting with "firstLetterDown"
//and end with "lastLetterDown ".

let weightA = 'A'.charCodeAt();
let weightZ = 'Z'.charCodeAt();
let weighta = 'a'.charCodeAt();
let weightz = 'z'.charCodeAt();

console.log(`English capital letters have a code starting with ${weightA} and end with ${weightZ}`);
console.log(`English lowercase letters have a code starting with ${weighta} and end with ${weightz}`);


console.log("===Task#5===========================================");
//5. Task
// Приведите строки в числа, а затем преобразуйте в boolean type, при a = '23', b = '43';

let a = '23';
let b = '43';
a = +a;
b = +b;
console.log(typeof a);
console.log(typeof b);
a = !!a;
b = !!b;
console.log(typeof a);
console.log(typeof b);


console.log("===Task#6===========================================");
//6. Task
//Есть два слова: «Welcome» и «Вэлкам», каждая четвертая буква которых имеет свой вес.
//Определите, какая из них весит больше, во сколько раз
//(и удивитесь, насколько отличается вес английских и русских букв :).
//А затем проверьте бо́льшую букву на чётность/нечётность.

let str1 = 'Welcome';
let str2 = 'Вэлкам';
let l1 = str1[3];
let l2 = str2[3];
let weigthL1 = l1.charCodeAt();
let weigthL2 = l2.charCodeAt();
let difference = weigthL2 / weigthL1;
console.log(`${l1} = ${weigthL1}`);
console.log(`${l2}  = ${weigthL2}`);
console.log(weigthL1 < weigthL2);
console.log(difference);
console.log(weigthL2 % 2 == 0);


let wordE = "Welcome";
let wordR = "Велком";
console.log(wordE[3] + "=" + wordE.charCodeAt(3));
console.log(wordR[3] + "=" + wordR.charCodeAt(3));
console.log( "разница веса " +  wordR.charCodeAt(3) / wordE.charCodeAt(3));
console.log(wordE.charCodeAt(0) %2 == 1);
//console.log(wordR.charCodeAt(0) %2 == 1);


console.log("===Task#7===========================================");
//7. Task
// In the string "QA For Everyone" find the code values of the first letters
//in each word of the string, then comparing these values,
//find the biggest one. After that, comparing the code values
//of the last letters of each word, find the smallest one.

let str3 = "QA For Everyone";
let codeValueOfFL1 = str3.charCodeAt(0);
let codeValueOfFL2 = str3.charCodeAt(3);
let codeValueOfFL3 = str3.charCodeAt(7);
console.log(codeValueOfFL1);
console.log(codeValueOfFL2);
console.log(codeValueOfFL3);


if ( codeValueOfFL1 > codeValueOfFL2 && codeValueOfFL1 > codeValueOfFL3 ){
    console.log(`${codeValueOfFL1} is the biggest first letter`);
} else if(codeValueOfFL2 > codeValueOfFL1 && codeValueOfFL2 > codeValueOfFL3){
    console.log(`${codeValueOfFL2} is the biggest first letter`);
} else if(codeValueOfFL3 > codeValueOfFL1 && codeValueOfFL3 > codeValueOfFL2){
    console.log(`${codeValueOfFL3} is the biggest first letter`);
}

let codeValueOfLL1 = str3.charCodeAt(1);
let codeValueOfLL2 = str3.charCodeAt(5);
let codeValueOfLL3 = str3.charCodeAt(str3.length - 1);
console.log(codeValueOfLL1);
console.log(codeValueOfLL2);
console.log(codeValueOfLL3);

if ( codeValueOfLL1 < codeValueOfLL2 && codeValueOfLL1 < codeValueOfLL3 ){
    console.log(`${codeValueOfLL1} is the smallest last letter`);
} else if(codeValueOfLL2 < codeValueOfLL1 && codeValueOfLL2 < codeValueOfLL3){
    console.log(`${codeValueOfFL2} is the smallest last letter`);
} else if(codeValueOfLL3 < codeValueOfLL1 && codeValueOfLL3 < codeValueOfLL2){
    console.log(`${codeValueOfLL3} is the smallest last letter`);
}


console.log("===Task#8===========================================");
//8. Task
// First you have to assign  two numbers (any numbers of your choice) and implement:
// If one of the numbers is even and the other is odd you need to print out - true,
// Otherwise you need to print out - false

let f = 15;
let g = 22;
// console.log(`Odd ${f % 2 > 0} && Even ${g % 2 == 0}`);

// f = 16;
// g = 24;
// console.log(`Odd ${f % 2 > 0} && Even ${g % 2 == 0}`);

if (f % 2 > 0 && g % 2 == 0 || g % 2 > 0 && f % 2 == 0){
    console.log('true');
}  else {
    console.log('false');}


console.log("===Task#9===========================================");
//9. Task
// Create 2 vars. Assign the same float number to both of them : 0.2.
//Multiply these 2 values.
//Check if the result of multiplying which we get in the js
//equals to the real value (in this case equals to the 0.04).

let h = 0.2;
let k = 0.2;
let actualResult = h * k;
let expectedResult = 0.04;
actualResult = parseFloat(actualResult.toFixed(2));
console.log(actualResult === expectedResult);


console.log("===Task#10===========================================");
//10. Task
// Four friends are going to the cinema, if everybody agrees (true).
//Create vars: Olya - using boolean, Natalya - using number,
//Jane - using space and Marina - using string.  => answer - True

let Olya = true;
let Natalya = 1;
let Jane = ' ';
let Marina = 'helpme';
let answer = Olya && !!Natalya && !!Jane && !!Marina;
console.log(answer);


console.log("===Task#11.1===========================================");
//11.1 Task
// Declare variables apple, banana and kiwi with prices 5, 10 and 7.
// Declare var sum which is the amount for three fruits. With variable result check:
// If result less than amount - “You forget to buy smth, check once again”;
// If result is greater than amount - “You going to pay more for
// (subtraction sum from amount) dollars, check again“;
// If the result is equal to the sum - “Your shopping is done.”

let apple = 5;
let kiwi = 7;
let banana = 10;
let amount = apple + banana + kiwi;
let sum = 22;
//(subtraction sum from amount)

if(sum < amount){
    console.log('You forget to buy smth, check once again');
}else if (sum > amount){
    console.log(`You going to pay more for ${sum - amount} dollars, check again`);
}else{console.log('Your shopping is done.');
}


console.log("===Task#11.2===========================================");
//11.2 Task
// Длина диагонали ТВ = 86 inches.
// Длина коробки = 2 метра. ТВ влезет в коробку? True or False ?


console.log("===Task#12===========================================");
//12. Task
// Colleges are collecting money for the trip.
// Natalya gave 5147$, Jane gave 0$, Marina gave 2358$, Olya gave 1249$.
// The trip costs 9800$. Will they go?(=> false).


console.log("===Task#13===========================================");
//13. Task
// Compare two wishes: "I want to be a QA Engineer" and "I don't want to do my homework".
// The wish that has a higher value of the string will come true.
// Will I become a QA Engineer?


console.log("===Task#14===========================================");
//14. Task
// In the variable named day is assigned some number between 1 to 31.
// Determine in which decade of the month this number belongs
// (to the first, second or third).

// let day = 14;
// let decade1 <= 10;
// let decade2 >= 11 && <=20;
// let decade3 >= 21 && <= 31;


console.log("===Task#15===========================================");
//15. Task
let color= 'blue';
let price=10000;
let make='Toyota';
let used = true ;
// Case1 I want new  Mercedes car which is blue and price >15000       => false
// Case2 I want used car with price 5000 or blue Toyota                => true

let case1 = used != true && make == 'Mercedes' && color == 'blue' && price > 15000;
let case2 = used && !price || !!color && !!make;

console.log(case1);
console.log(case2);


console.log("===Task#16===========================================");
//16. Task
// Two friends shopped at the store.
// Olya bought 25 eggs, and Yulya bought five times less eggs than Olya.
// Find if it is true or false that Olya bought more eggs than Yulya.



console.log("===Task#17===========================================");
//17. Task
// Нужно написать код на сравнение значений переменных (вы можете их менять)
// с условиями задачи, заранее заданными.
// Любитель пляжа хочет пойти на пляж при соблюдении 2-х условий:
// 1.наличие плавок("+")
// 2.Погода: температура 20 и выше.(>=20)
// Если оба условия сходятся то выведете в консоль "Пойду на пляж!"
// Если НИ одно условие не реализуется - "Кажись, посижу дома пока"
// Если с погодой повезло, а плавок нет - "Погодка - сказка! Но без плавок буду смотреться вызывающе"
// Если есть плавки, а погода не очень - "Плавки то есть, но как-то прохладно.
// Там будут только ребята с QA, которые накосячили в операторах сравнения"
// !!! Чтобы потестить ваш код, меняйте плавки(+/-) и значение температуры.

let shorts = "+";
let temp = 30;
if(shorts == "+" && temp >= 20){
    console.log('Пойду на пляж!');
}else if(shorts == "-" && temp < 20){
    console.log('Кажись, посижу дома пока');
}else if(shorts == "-" && temp >= 20){
    console.log('Погодка - сказка! Но без плавок буду смотреться вызывающе');
} else { console.log('Плавки то есть, но как-то прохладно. Там будут только ребята с QA');}


console.log("===Task#18===========================================");
// 18. Task
//   Task#1:
//     Bob and Bill have planned their trip to Hawaii. They are really busy with work and need to find  the best way to plan their trip.
//      They have 4 options to fly, but only 1 can be good for both of them:
// Calendar hours to fly:
// 1. Monday - 10am;
// 2. Tuesday - 12pm;
// 3. Friday - 6pm;
// 4. Sunday - 1pm;
//    Case 1: Bob can fly Monday any time, and Tuesday after 3pm. And Friday till 5pm, and Sunday till 12.30pm.
// Bill can fly Monday after 4pm, and Tuesday anytime. And Friday after 9am, and Sunday after 11am.
//    Case 2: Bob can fly only Friday after 3pm, and Sunday any time;
// Bill can fly Monday after 10:01am, or Tuesday after 11:55pm. Or Friday till afternoon, and Sunday he is free all day.
//      Find out which case is true or false, to know when they both can plan their trip together.
// Task#2:
// Create variables for the names with age: Tom, Sam, Jack, Ted.
// Tom is 16, his friends are 2 years older or younger, from each other, starting from Tom.
// a)Count the age of each person;
// b) Insert the names with the age to the string, using concatenation and ${}:
// “Tom has - 16 years old, Sam has - …. years old, Jack has … years old, Ted has … years old. And the total of our age is ….years old”.
// c) Find out what is the Unicode Value of the 1sr letter of the name, and add the total to the string:
// “The total of the Unicode values of the 1st letter of the all names is ….!”.


console.log("===Task#20===========================================");
// 20. Task
// We have string let str = '124, 45, 8';
// Show in Console if numbers in string are even: true/false.
// Expected to see:
// `Number 1: [show number] is even: true;
//  number 2: [show number] is even: false;
// number 3: [show number] is  even: true’


console.log("===Task#21===========================================");
// 21. Task
// Одним из приемов тестирования черного ящика является метод “Эквивалентное разбиение”.
// Суть метода - выделяются множества значений,
// для которых система применяет одинаковую логику.
// Пример:
// В поле можно ввести значения от 0 до 10 включительно, и от 40 до 60 включительно.
// Вопрос: Сколько классов эквивалентности и что тестируем?
// Ответ: 5.
// Тестируемые диапазоны: три зоны некорректных значений (<0, (10;40), >60);
//  и две зоны корректных значений: [0;10)   и (40 ;60) не включительно.
// Необходимо составить и решить задачу для следующих чисел, выбранных для тестирования,
// причем, если число из диапазона некорректных значений ,
// то заменяем его на false, а если из диапазона корректных ,
// то заменяем его на true, если числа выбраны из одного диапазона ,
// то между ними ставится знак ||  , а если из разных диапазонов, то знак &&.

// Пример: (-1,19,61,1,56);
// Решение: (false && false && false && true && true);

// (0, 1, 75, 91, 45);
// (-6, 0, 9, 39, 61).


console.log("===Task#21===========================================");
// 21. Task
// Выведите в консоле значение true при следующих переменных:
// red = true;
// green = false;
// black = true;
// grey = true;

// Раскрасьте стены дома в ( red and green or black and grey and green or grey and red and green).
// Порядок расставления скобок за Вами.


console.log("===Task#22===========================================");
// 22. Task
// Вывести в консоле числовое значение (математический вес) индекса 5 во фразе
// «We are the champions”.
