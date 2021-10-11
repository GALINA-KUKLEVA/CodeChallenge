// /*
// STUDENTS HOMEWORK LESSON 1 с решением
// */
console.log("===Task#1===========================================");
// 1. Write a code where you will find a perimeter of a rectangle, where side a = 10,
// side b = 12;

let a = 10;
let b = 12;
let perimetr = (10 + 12) * 2;
console.log(perimetr);


console.log("===Task#2===========================================");
// 2.  Create a string with a name userAge and a value “21” and change the data type
//  from a string to a number and add 10 to that number.

let userAge = "21";
userAge = + userAge + 10;
console.log(userAge);


console.log("===Task#3===========================================");
// 3. Create 5 variables, initialize them with integers and find the average of variables.
// Print the result to console

let v1 = 3;
let v2 = 7;
let v3 = 9;
let v4 = 15;
let v5 = 28;
let result = (v1 + v2 + v3 + v4 + v5) / 5
console.log(result);


console.log("===Task#4===========================================");
// 4. Create a variable, initialize it with a positive integer. Make it negative and
//print the result to console

let v6 = 75;
v6 = - v6;
console.log(v6);


console.log("===Task#5===========================================");
// 5. Create two variables with values(5, 7). The first with data type Integer and the
//  second with a String data type . Raise the number 5 to the power of 2, save as a result.
// Print in the console the sum of the result and the second variable.

let first = 5;
let second = "7";
second = +second;
first = first ** 2;
console.log(first + second);
console.log(second);


console.log("===Task#6===========================================");
// 6. Create the alert “I wanna be the best Software Engineer”. Create two variables
//  of data type String with values:“So what?” and “Work hard for that !!!”.
//  Concatenate two Strings and print in the console.

alert("I wanna be the best Software Engineer");
let str1 = "So what?";
let str2 = "Work hard for that!!!";
console.log(str1 + ' '+ str2);


console.log("===Task#8===========================================");
// 8. Write a code that calculates your BMI (Body Mass Index), where weight=<your_weight_in_kg>
//  and height=<your_height_in_m>. Print the result to the console.

let weight = 75;
let height = 1.75;
console.log(weight /(height ** 2));


console.log("===Task#9===========================================");
// 9. Create two strings with your first name and last name. Print in console lengths of these
//  strings.

let firstName = "Galina";
let lastName = "Kukleva";
console.log(firstName.length);
console.log(lastName.length);


console.log("===Task#10==========================================");
// 10 Create a variable (integer) which is a radius of a circle. Then write a code and calculate
//  a length of circumference (длина окружности) of this circle.

let r = 10;
const P = 3.14;
let lengthOfCircumerence = 2 * P * r;
console.log(lengthOfCircumerence);


console.log("===Task#11==========================================");
// 11 Create two integer variables, one of which is a base and another is a height of a triangle,
// initialize them with any values. Then calculate a square footage of a triangle.

let base = 10;
let heightOfTriangle = 12;
let squareOfTriangle = base * heightOfTriangle / 2;
console.log(squareOfTriangle);


console.log("===Task#12==========================================");
// 12 Refer to the last element of a string using a math operation where str = “Never give up”;

let str3 = "Never give up";
console.log(str3[str3.length - 1]);


console.log("===Task#13==========================================");
// 13 Determine the remainder of the division of the next variables: a = 11; b = 4.
// What is the remainder of variable a?

let a1 = 11;
let b1 = 4;
let remainderOfDivision = a1 % b1;
console.log(remainderOfDivision);


console.log("===Task#14==========================================");
// 14. Declare empty variables a that equals true and b equals to 5.Declare variable result
// and make it equals to sum of a and b. Print the result

let a2 = true;
let b2 = 5;
let sum = a2 + b2;
console.log(sum);


console.log("===Task#15==========================================");
// 15. Declare variables: x = “8”; y = 2. Create a variable that takes the result of x
// divided by y. Print result.

let x = "8";
let y = 2;
let division = +x / y;
console.log(division);


console.log("===Task#16==========================================");
//16. Declare a string name and assign it a value of “Tom”, re-assign to a number and show in
//  the console type of the name.

let str4 = "Tom";
str1 = +str1;
console.log(typeof str1);
console.log(str1);


console.log("===Task#17==========================================");
// 17. Создайте пустую строку  и определите её длину.

let str5 = "";
console.log(str2.length);


console.log("===Task#18==========================================");
// 18. Создайте переменную name и присвойте ей любое имя. Создайте переменную sign присвойте
// ей значение первой буквы имени, после которой поставьте ! знак.

let name = "Anna";
let sign = name[0] + "!";
console.log(sign);


console.log("===Task#19==========================================");
// 19. If the car travels 600 km in 3 hours, what is it’s speed?
// Create variables, declare them and console the result.

let way = 600;
let time = 3;
let speed = way / time;
console.log(speed);


console.log("===Task#20==========================================");
// 20. Create one variable with name firstName, second variable with lastName.
// And console result as the email: firstName.lastName@gmail.com

let firstName1 = "Maria";
let lastName1 = "Leonova";
const gmail = "@gmail.com"
console.log(firstName1 + lastName1 + gmail);


console.log("===Task#21==========================================");
// 21. Three boys have three boxes. Each boy has 120lbs of weight.
//Each box has 2 lbs of apples inside. One boy ate half of the box of apples in his box.
//Question: What is the total lbs boys and apples together? Create the variables and count the amount.

let weightBoy = 120;
let weightBox = 2;
let weightBoy1 = 120 + weightBox / 2;
let n = 2;
console.log((weightBoy + weightBox) * n + (weightBoy1 + weightBox / 2));


console.log("===Task#22==========================================");
//22. Please concatenate “I”, “ and my friends”, “ love QA_FOR_EVERYONE”,
//to have only one full string line.
//And count the length of the string.

let str6 = "I";
let str7 = " and my friends";
let str8 = " love QA_FOR_EVERYONE";
let str9 = str6 + str7 + str8
console.log(str9);
console.log(str9.length);


console.log("===Task#23==========================================");
//23. First kid uses 5 diapers a day, the second kid uses 8 diapers a day.
//How many diapers mom should buy to have enough for the next 2 weeks?

let d1 = 5;
let d2 = 8;
let week = 7;
let amount = (d1 + d2) * 2 * week;
console.log(amount);


console.log("===Task#24==========================================");
//24. Elon Mask building Falcon 9 rockets. The cost of 1 Falcon 9 equal 57 Tesla x model cars.
//Trip to the moon requires 13 rockets.
//Can you help Elon to figure out how many cars he needs to sell in order to achieve his goal?

let amountFalcon9 = 13;
let amountTeslaXfor1F = 57;
let amountTeslaX = amountFalcon9 * amountTeslaXfor1F;
console.log(amountTeslaX);


console.log("===Task#25==========================================");
//25. Create a variable with a name “word”, assign it with value “VOLUME”.
//By using modulus find the remainder  of  2 divisions between 90 and 8; 11 and 2.
//Print string that consists of an index of variable “word” equals first division,
//then second division, next - first char of the string and the last index.
//Divide indexes with new lines (\n).

let word = 'VOLUME';
let division1 = 90 % 8;
let division2 = 11 % 2;
let l1 = division1;
let l2 = division2;
console.log(
    word[l1] + '\n' + ' ' + word[l2] + '\n'  + ' ' + word[0] + '\n'  + ' ' + word[word.length - 1]);
console.log(`${word[l1]} \n ${word[l2]} \n ${word[0]} \n ${word[word.length - 1]}`);

console.log("===Task#26==========================================");
//26. Create two numbers and assign them random values.
// Print the result of raising the first number to the power
// of the second one and add 1 to the result by using increment.

let d = 4;
let g = 2;
let res1 = d ** g;
console.log(++res1);


console.log("===Task#27==========================================");
//27. The biggest word in the world is "pneumonoultramicroscopicsilicovolcanoconiosis".
//Count and print the number of letters. Print the 10th letter of this word.

let biggestWord = "pneumonoultramicroscopicsilicovolcanoconiosis";
let letterNumber = 10;
let i = letterNumber - 1;
console.log(biggestWord.length);
console.log(biggestWord[i]);


console.log("===Task#28==========================================");
//28. Jane paid $4.16 for a sandwich. She paid $0.95 for a piece of fruit.
//What is the total amount Jane paid for the sandwich and fruit?
//Print: "Jane paid for her lunch 'total amount' "

let sandwich = 4.16;
let fruit = 0.95;
let totalAmount = sandwich + fruit;
console.log('Jane paid for her lunch ' + totalAmount);


console.log("===Task#29==========================================");
//29. Here is the data set: 9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18.
// Find and print:
// Mean
// Median
// Mode

let mean = (9 + 10 + 12 + 13 + 13 + 13 + 15 + 15 + 16 + 16 + 18) / 11;
console.log(mean);

console.log("===Task#30==========================================");
//30. The radius of a cone is 11 inches. Count and print the volume of this cone.
//The answer has to be a string. Think about the correct format for your answer.

let radiusOfCone = 11;
let heihtOfCone = 18;
let volumeOfCone = 1 /3 * radiusOfCone ** 2 * heihtOfCone;
console.log('The volume of cone is ' + volumeOfCone +' cubic inches');


console.log("===Task#31==========================================");
//31. Create variables "a"  with value 15 and "b" with value 18.
//Assign the value of the doubled sum of the variables "a" and "b" to the variable "x"
//and print the result to console.

let a3 = 15;
let b3 = 18;
let x3 = 2 * (a3 + b3);
console.log(x3);


console.log("===Task#32==========================================");
//32. Дана сторона куба  5 см. Найти объем куба. Вывести ответ в виде строки:
//Объем куба составляет {вложить полученный результат} см.

let cubeSide = 5;
let volume = 5 **3;
console.log('Объем куба составляет ' + volume + ' см.');


console.log("===Task#33==========================================");
//33. Дана строка: "Children can have different hobbies", вычислить длину этой строки,
//найти элемент под первым и последним индексом, вывести результаты в консоль.

let string = "Children can have different hobbies";
let stringLength = string.length;
let firstElement = string[0];
let lastElement = string[string.length - 1];
console.log(stringLength);
console.log(firstElement);
console.log(lastElement);


console.log("===Task#34==========================================");
//34. Cторона квадрата равна 10. По середине квадрата проведена линия,
//разделяющая квадрат на 2 прямоугольника. Найдите и выведите периметр и площадь одного
//из получившихся прямоугольников.

let squareSide = 10;
let rectanglePerimetr = (squareSide + squareSide / 2) * 2;
let rectangleSqare = squareSide * squareSide / 2;
console.log(rectanglePerimetr);
console.log(rectangleSqare);


console.log("===Task#35==========================================");
//35. Create 3 variables: one String type, one boolean and last one number.
//Check the type of each variable.

let string1 = "House";
let boolean1 = true;
let number1 = 9;
console.log(typeof string1);
console.log(typeof boolean1);
console.log(typeof number1);


console.log("===Task#36==========================================");
//36. You need  to receive Infinity in the console (using Math) and check what type it will be.

let aa = 8;
let ab = aa / 0;
console.log(ab);
console.log(typeof ab);


console.log("===Task#37==========================================");
//37. Let’s create a program that will convert our age into days.
//Create a variable age with your age and create a variable sum to multiply 365, Print console.
//Note ignore leap years, expect only positive integers.

let age = 25;
let dayInYear = 365;
let sum1 = age * 365;
console.log(sum1);


console.log("===Task#38==========================================");
//38. Elon Musk has created a Tesla bot. We should greet it.
//Create a variable greeting and declare "Welcome to the earth!" and print it out.

let greeting = "Welcome to the earth!";
console.log(greeting);

console.log("===Task#39==========================================");
//39. Write a code where you will find distance, where speed = 70, time = 12;

let speed1 = 70;
let time1 = 12;
let distance = speed1 * time1;
console.log(distance);


console.log("===Task#40==========================================");
//40. Создайте переменную str и присвойте ей значение 'abcde'.
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e’.

let str11 = 'abcde';
console.log(str11[0]);
console.log(str11[1]);
console.log(str11[str11.length - 1]);


console.log("===Task#41==========================================");
//41. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
//Выведите результат в консоль.
let second1 = 1;
let minute = second1 * 60;
let hour = minute * 60;
let day = hour * 24;
let month = day * 31;
console.log('В часе ' + hour + ' секунд');
console.log( 'В сутках ' + day + ' секунд');
console.log( 'В месяце ' + month + ' секунд');


console.log("===Task#42==========================================");
//42. Студент решил взять курс. Курс начинается с 1 Сентября по 31 Декабря.
//Каждый день студент занимается по 3 часа. Напишите, сколько всего времени студент потратит на весь курс.
//Выведете результат в консоль.

let hours = 3;
let dayInMonth1 = 30;
let dayInMonth2 = 31;
let totalAmountOfHouers = 3 * (dayInMonth1 * 2 + dayInMonth2 * 2);
console.log(totalAmountOfHouers);


console.log("===Task#43==========================================");
//43. To burn calories for 1 chocolate Marusya needs to run 2km, and to burn calories for 1 ice cream 5km.
// How far she has to run if she breaks her diet by eating 2,5 chocolates and 3 ice creams.
// Print the distance in the console.

let dF1Ch = 2;
let dF1IC = 5;
let chAmount = 2.5;
let icAmount = 3;
let totalDistance = chAmount * dF1Ch + icAmount * dF1IC;
console.log('She has to run ' + totalDistance + ' km');


console.log("===Task#44==========================================");
//44. Print in the console “x” from the word “supercalifragilisticexpialidocious”
//through enrichment to the index in this word and what is the length of this word.

let word2 = 'supercalifragilisticexpialidocious';
console.log(word2.length);
for(let i = 0; i <= word2.length - 1; i++){
    if(word2[i] === 'x'){
        console.log(word2[i]);
    }
}


console.log("===Task#45==========================================");
//45. Create the variable with the name => sentence
//and declare the value "Have a nice day".
//Count the number of letters in a string. Console the result.
//What is the last letter in the line?
//Console the number of letters and the last letter. Console the last letter.

let sentence = "Have a nice day";
let numberOfLetters = sentence.length;
let lastLetter = sentence[sentence.length - 1];
console.log(numberOfLetters);
console.log(lastLetter);


console.log("===Task#46==========================================");
//46. Write a code that  calculates Volume of the cube with length of side = 7
//and calculate length of all sides. Return statement “The volume of the cube = ...
//with length of 1 side = … and length of all sides …” -> using ` ${}`.

let side = 7;
let cubeVolume = 7 ** 3;
let allSideCube = 7 * 12;
console.log('The volume of the cube = ' + cubeVolume + ' with length of 1 side = '
    + side + 'and length of all sides ' + allSideCube );

console.log("===Task#47==========================================");
//47. Write a code that picks up the height and base of the triangle and calculate its areas.
//The area of a triangle is: (base * height) / 2. Don't forget to print the result.

let height1 = 12;
let base1 = 15;
let area = (base1 * height1) / 2;
console.log(area);


console.log("===Task#48==========================================");
//48. Create a String with a value "208". Convert String to number.
//Find the remainder after division by "5".Output the result to the console.

let str12 = "208";
str12 = +str12;
let remainder = str12 % '5';
console.log(remainder);


console.log("===Task#49==========================================");
//49. The runner's jogging time is 30 minutes, distance 5,2 km.
//Find the runner’s speed in m/s and display the result on the console.

let runnersDistans = 5.2;
let runnersTime = 0.5;
let runnursSpeed = runnersDistans / runnersTime / 3.6
console.log(runnursSpeed);


console.log("===Task#50==========================================");
//50. Наташа пришла в магазин и купила ребёнку канцелярию в школу:
//5 тетрадей в клетку (6 рублей за штуку); 4 тетради в линейку (7 рублей за штуку);
//набор карандашей (528 рублей); акварель (349 рублей). Сколько денег потратила Наташа?

let notebooksAmount1 = 5;
let notebooksPrice1 = 6;
let notebooksAmount2 = 4;
let notebooksPrice2 = 7;
let pencilsPrice = 528;
let paintPrice = 349;
let totalAmount1 = notebooksAmount1 * notebooksPrice1 + notebooksAmount2 * notebooksPrice2 + pencilsPrice + paintPrice;
console.log(totalAmount1);


console.log("===Task#51==========================================");
//51. Kate is 25 years old. Her mother is 2.5 times older. Find how old her mother is.
// Make a full sentence " My mother is 2.5 times older than me and she is 55 years old" and
// calculate the length of this sentence.

let ageKate = 25;
let ageKatesMother = ageKate * 2.5;
let str13 = "My mother is 2.5 times older than me and she is 62 years old";
let str13Length = str13.length;
console.log(ageKatesMother);
console.log(str13);
console.log(str13Length);


console.log("===Task#52==========================================");
//52. Create a two-digit variable and find the remainder of the division on 7.
//The result of the remainder of the division exponentiates on 3 and finds the type of the result.

let f = 51;
let remainder2 = f % 7;
let result1 = remainder2 ** 3;
let h = typeof result1;
console.log(result1);
console.log(h);


console.log("===Task#53==========================================");
//53. Создайте переменную с именем s. Присвойте переменной s значение 125.
//Напишите последовательность команд, в результате которых переменная s будет принимать значения 25, 5, 0.

let s = 125;
s = s / 5;
console.log(s);
s = s / 5;
console.log(s);
s = s % 5;
console.log(s);


console.log("===Task#54==========================================");
//54. Создайте переменную именем х. Присвойте переменной х значение 12.
// Создайте переменную именем у.
// Присвойте переменной у значение 21.
// Напишите последовательность команд, в результате которых:
// переменные х и у обменяются своими значениями.
// Выведите значения переменных х и у в консоль.

let x1 = 12;
let y1 = 21;
x1 = x1 + y1;
y1 = x1 - y1;
x1 = x1 - y1;
console.log(x1, y1);


console.log("===Task#55==========================================");
//55. Инвестиции в бизнес составили I =$5,000,000
// Ожидаемые доходы (CFi) за 5 лет составят:
// 2021 год – $1,000,000
// 2022 год – $1,500,000
// 2023 год – $2,000,000
// 2024 год – $2,500,000
// 2025 год – $3,000,000
// Ставка Дисконтирования =20%
// Требуется рассчитать:
// чистый дисконтированный доход (NPV) за 5 лет,
// индекс прибыльности (PI)=NPV/I
// Срок окупаемости простой и дисконтированный
// Простой( Вывести точную дату когда проект окупится)
// Дисконтированный ( Вывести точную дату когда проект окупится)
// Месяца обозначить переменными  jan,feb,march…..
// Человек пришел в банк через 5 лет после того как открыл депозит.
// Ставка депозита была неизменна и составляла 10% годовых. Сумма которую он получил в конце срока $100.000.
// Какую сумму он положил на счет изначально  и какая сумма у него была на счету в конце каждого года.
// Вывести какая процентная ставка применялась бы к начальной сумме депозита чтобы получить сумму на конец каждого года
// Задачи оформить  в читаемом виде с выводом всех данных.


console.log("===Task#56==========================================");
//56. Длина прямоугольника 28 см, а ширина на 6 см меньше. Найти периметр и площадь треугольника.
// Создать 4 переменные: length - длина прямоугольника, width - ширина,
//perimetr - периметр, square - площадь.
//Присвоить значение 28 для переменной length. Остальные значения нужно будет посчитать и вывести в консоль)

let rL = 28;
let rW = 28 - 6;
let gipotenuza2 = rL ** 2 + rW ** 2;
let gipotenuza = Math.sqrt(gipotenuza2);
let perTr = gipotenuza + rL + rW;
let sqTr = rL * rW / 2;
console.log(rW);
console.log(gipotenuza);
console.log(perTr);
console.log(sqTr);


console.log("===Task#56.2========================================");

// Иван сделал из проволоки квадрат со стороной 12 см.
//Если из той же проволоки он сделает прямоугольник с шириной 6 см, то какова будет его длина?
// Название переменных придумываем сами. В консоли выводим ответ = длина прямоугольника.

let squareSide1 = 12;
let perSq = squareSide1 * 4;
let regSide1 = 6;
let regSide2 = perSq / 2 - regSide1;
console.log(regSide2);


console.log("===Task#57==========================================");
//57. Литр бензина стоит 50 рублей, расход автомобиля 8 литров бензина на 100 км.
// Вычислить, сколько будет стоить проехать 60 км. и вывести значение на экран;
// Создать скрипт считающий сколько Джону лет в текущем году, если он родился в 1989 г.
// Результат вывести на экран в виде "Джону в ……... исполнится ……..”

let distance2 = 60;
let rkm= 8 / 100;
let price = 50;
let totalPrice = distance2 * rkm * price;
console.log(totalPrice);

console.log("===Task#57.2========================================");

let yOB = 1989;
let currentYear = 2021;
let ageJohn = currentYear - yOB;
console.log(`Джону в ${currentYear} исполнится ${ageJohn}`);


console.log("===Task#58==========================================");
//58. Друзья, вытащите цифры из строки через индекс знаков: "Мне нравятся песни 7Б и U2".
//Найдите целый остаток от их деления друг на друга.
//У результата предыдущего действия поменяйте знак на противоположный, а потом увеличьте его на 1 через инкримент.
// Полученный результат выведете в консоль и в окно уведомления браузера в составе предложения
// "Смысловой нагрузки в задании ${}, но какая практика!!!"

let str14 = "Мне нравятся песни 7Б и U2";
let str14Length = str14.length;
let indexNumberFirst = str14Length - 1 - 6;
let numberFirst = str14[indexNumberFirst];
let numberSecond = str14[str14Length - 1];
let remainderOfdivision1 = numberFirst % numberSecond;
remainderOfdivision1 = - remainderOfdivision1;
remainderOfdivision1 = ++remainderOfdivision1;
alert(`Смысловой нагрузки в задании ${remainderOfdivision1}, но какая практика!!!`)
console.log(`Смысловой нагрузки в задании ${remainderOfdivision1}, но какая практика!!!`);