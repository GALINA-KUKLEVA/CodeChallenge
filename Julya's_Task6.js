//===============Lesson 6 => HW loops, i vs arr[i], methods ============


//https://pythontutor.com/javascript.html#mode=edit


// console.log("===Task#1.1===========================================");

// 1. Заполнить массив числами от 0 до 20 включительно, за исключением чисел,
//     кратных 5 (using continue)


// const arr = [];
// for(let i = 0; i <= 20; i++){
//   if(i % 5 != 0){
//    console.log(arr.push(i));
//   }
// }
// console.log(arr);



// const arr = [];
// for(let i = 0; i <= 20; i++){
//   if(i % 5 == 0){
//    continue;
//   } else {
//    arr.push(i);
//   }
// }
// console.log(arr);


// console.log("===Task#1.2===========================================");

// // 2. Создайте цикл по arr который остановиться если arr[i] будет равен num
//   const arr = [1, 4, 6, 13, 0, -45, 12];
//   const num = 6;
// for(let i = 0; i <= arr.length; i++){
//   if(arr[i] == num){
//     break;
//   }
//   console.log(arr[i]);
// }


// console.log("===Task#1===========================================");

//1. Task from the interview
// FizzBuzz
// from 1 to 100
// For every number that is divisible by 3 and 5, console log "FizzBuzz".
// For every number that is divisible by only 3 and not 5, console.log "Fizz".
// For every number that is divisible by only 5 and not 3, console .log "Buzz".

// const fizzBuzz = (num) => {

// }
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(13));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(4));
// console.log(fizzBuzz(236));


// const result = [];

// for(let i = 1; i <= 100; i++){
//   if(i % 15 == 0 ){
//     result.push("FizzBuzz");
//   } else if(i % 3 == 0){
//       result.push("Fizz");
//     } else if(i % 5 == 0){
//       result.push("Buzz");
//     } else{
//       result.push(i);
//     }
//   }
// console.log(result);


console.log("===Task#2===========================================");

// 2.Task from interview Walmart ******
// function getting an array of N numbers.
// Function have to return a Number which has dupe with minimum index

//in examples below 2 and 3 appears twice
//Example 1
// console.log(myFunc([2,3,3,6,2]));
// return 3 since index of second 3 > index of second 2

const myFunc = (arr) => {
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
    return -1;
}

console.log(myFunc([2,3,5,6,4]));
console.log(myFunc([2,3,3,6,2]));
console.log(myFunc([2,3,4,2,3]));
console.log(myFunc([1,3,5,4,2,2,3,2,4,2,3]));


//Example 2
// console.log(myFunc([2,3,4,2,3]));
// return 3 since index of second 3 < index of second 2
// if no dupliates, retrn -1;

// const myFunc = (arr) => {

// }

// console.log(myFunc([2,3,3,6,2]));
// console.log(myFunc([2,3,4,2,3]));
// console.log(myFunc([1,3,5,4,2,2,3,2,4,2,3]));

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
//https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
//https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
//https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
//https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript
//https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript
//https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript
//https://www.codewars.com/kata/59d28768a25c8c51a6000057/train/javascript
//https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript
//https://www.codewars.com/kata/564d0490e96393fc5c000029/train/javascript
//https://www.codewars.com/kata/5a662a02e626c54e87000123/train/javascript
//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
//https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript
//https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
//https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
//https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
//https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript
//https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
//https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
//https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript
//https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
//https://www.codewars.com/kata/58aacf3e048560c705000799/train/javascript
//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
//https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript
//https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript
//https://www.codewars.com/kata/52e9aa89b5acdd26d3000127/train/javascript
//https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//https://www.codewars.com/kata/598057c8d95a04f33f00004e/train/javascript
//https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
//https://www.codewars.com/kata/5841f4fb673ea2a2ae000111/train/javascript
//https://www.codewars.com/kata/583989556754d6f4c700018e/train/javascript
//https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
//https://www.codewars.com/kata/square-n-sum
//https://www.codewars.com/kata/how-good-are-you-really
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099
//https://www.codewars.com/kata/sum-of-positive
//https://www.codewars.com/kata/calculate-average
//https://www.codewars.com/kata/divide-and-conquer
//https://www.codewars.com/kata/sum-of-odd-cubed-numbers
//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
//https://www.codewars.com/kata/58acfe4ae0201e1708000075
//https://www.codewars.com/kata/odd-or-even
//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
//https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e
//https://www.codewars.com/kata/what-is-type-of-variable
//https://www.codewars.com/kata/is-every-value-in-the-array-an-array
//https://www.codewars.com/kata/sum-arrays
//https://www.codewars.com/kata/count-the-monkeys
//https://www.codewars.com/kata/filling-an-array-part-1
//https://www.codewars.com/kata/training-js-number-4-basic-data-types-array
//https://www.codewars.com/kata/5841f680c5c9b092950001ae
//https://www.codewars.com/kata/5d59576768ba810001f1f8d6
//https://www.codewars.com/kata/545a4c5a61aa4c6916000755
//https://www.codewars.com/kata/remove-the-minimum
//https://www.codewars.com/kata/lario-and-muigi-pipe-problem
//https://www.codewars.com/kata/sum-without-highest-and-lowest-number
//https://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list
//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
//https://www.codewars.com/kata/square-n-sum
//https://www.codewars.com/kata/how-good-are-you-really
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099
//https://www.codewars.com/kata/sum-of-positive
//https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives
//https://www.codewars.com/kata/calculate-average
//https://www.codewars.com/kata/divide-and-conquer
//https://www.codewars.com/kata/sum-of-odd-cubed-numbers
//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
//https://www.codewars.com/kata/58acfe4ae0201e1708000075
//https://www.codewars.com/kata/odd-or-even
//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
//https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e
//https://www.codewars.com/kata/511f0fe64ae8683297000001
//https://www.codewars.com/kata/527b3cd0492b6b15250060af
//https://www.codewars.com/kata/5436f26c4e3d6c40e5000282
//https://www.codewars.com/kata/find-the-divisors
// https://www.codewars.com/kata/555086d53eac039a2a000083	8Kyu
// https://www.codewars.com/kata/5865918c6b569962950002a1	8Kyu
// https://www.codewars.com/kata/50654ddff44f800200000007	8Kyu
// https://www.codewars.com/kata/5977618080ef220766000022	8Kyu
// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7	8Kyu
// https://www.codewars.com/kata/5aca48db188ab3558e0030fa	7Kyu
// https://www.codewars.com/kata/57cc975ed542d3148f00015b	8Kyu
// https://www.codewars.com/kata/570bcd9715944a2c8e000009	8Kyu
// https://www.codewars.com/kata/582e4c3406e37fcc770001ad	8Kyu
// https://www.codewars.com/kata/562926c855ca9fdc4800005b	8Kyu
// https://www.codewars.com/kata/55225023e1be1ec8bc000390
// https://www.codewars.com/kata/58649884a1659ed6cb000072
// https://www.codewars.com/kata/5aa736a455f906981800360d
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
// https://www.codewars.com/kata/568dcc3c7f12767a62000038
// https://www.codewars.com/kata/511f0fe64ae8683297000001
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// https://www.codewars.com/kata/56606694ec01347ce800001b	7Kyu
// https://www.codewars.com/kata/5545f109004975ea66000086
// https://www.codewars.com/kata/57a429e253ba3381850000fb
// https://www.codewars.com/kata/570669d8cb7293a2d1001473
// https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
// https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/solutions/javascript
// https://www.codewars.com/kata/5aca48db188ab3558e0030fa
//https://www.codewars.com/kata/56747fd5cb988479af000028
//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
//https://www.codewars.com/kata/55e2adece53b4cdcb900006c/javascript
//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
//https://www.codewars.com/kata/56747fd5cb988479af000028
//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
//https://www.codewars.com/kata/57f6ecdfcca6e045d2001207
//https://www.codewars.com/kata/562e98755e9214cd2500003d
//https://www.codewars.com/kata/570669d8cb7293a2d1001473
//https://www.codewars.com/kata/560ecf0cb040de130e00007d
//https://www.codewars.com/kata/57f6ecdfcca6e045d2001207
//https://www.codewars.com/kata/562e98755e9214cd2500003d
//https://www.codewars.com/kata/570669d8cb7293a2d1001473
//https://www.codewars.com/kata/560ecf0cb040de130e00007d
//https://www.codewars.com/kata/57f6ecdfcca6e045d2001207
//https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript
//https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
//https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
//https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
//https://www.codewars.com/kata/count-by-x
//https://www.codewars.com/kata/squares-sequence
//https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1
//https://www.codewars.com/kata/generate-range-of-integers
//https://www.codewars.com/kata/pre-fizzbuzz-workout-number-1
//https://www.codewars.com/kata/training-js-number-10-loop-statement-for
//https://www.codewars.com/kata/powers-of-2
//https://www.codewars.com/kata/to-square-root-or-not-to-square-root
//https://www.codewars.com/kata/583989556754d6f4c700018e
//https://www.codewars.com/kata/5841f4fb673ea2a2ae000111
//https://www.codewars.com/kata/588e27b7d1140d31cb000060
//https://www.codewars.com/kata/58ca658cc0d6401f2700045f
//https://www.codewars.com/kata/58ebfa6ef7cda1a3d4000048
//https://www.codewars.com/kata/58f8b35fda19c0c79400020f
//https://www.codewars.com/kata/598057c8d95a04f33f00004e
//https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4
//https://www.codewars.com/kata/training-js-number-4-basic-data-types-array
//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
//https://www.codewars.com/kata/5a145ab08ba9148dd6000094
//https://www.codewars.com/kata/reversed-sequence
//https://www.codewars.com/kata/5413759479ba273f8100003d
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0
//https://www.codewars.com/kata/remove-the-minimum
//https://www.codewars.com/kata/a-needle-in-the-haystack
//https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array
//https://www.codewars.com/kata/57f604a21bd4fe771b00009c
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing
//https://www.codewars.com/kata/5f6d533e1475f30001e47514
//https://www.codewars.com/kata/expressions-matter
//https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130
//https://www.codewars.com/kata/56d19b2ac05aed1a20000430
//https://www.codewars.com/kata/lario-and-muigi-pipe-problem
//https://www.codewars.com/kata/559cc2d2b802a5c94700000c
//https://www.codewars.com/kata/55de9c184bb732a87f000055
//https://www.codewars.com/kata/566dc05f855b36a031000048
//https://www.codewars.com/kata/5729b103dd8bac11a900119e
//https://www.codewars.com/kata/find-the-divisors
//https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series
//https://www.codewars.com/kata/grasshopper-summation
//https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers
//https://www.codewars.com/kata/training-js-number-10-loop-statement-for
//https://www.codewars.com/kata/sum-of-multiples
//https://www.codewars.com/kata/draw-stairs
//https://www.codewars.com/kata/5f7b1a82be51af00105c82bd
//https://www.codewars.com/kata/55d1d6d5955ec6365400006d
//https://www.codewars.com/kata/power
//https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d
//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
//https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
//https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034/train/javascript
//https://www.codewars.com/kata/585a1a227cb58d8d740001c3/train/javascript
//https://www.codewars.com/kata/585a1f0945376c112a00019a/train/javascript
//https://www.codewars.com/kata/5862eeeae20244d5eb000005/train/javascript
//https://www.codewars.com/kata/559590633066759614000063/train/javascript
//https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9/train/javascript
//https://www.codewars.com/kata/555a7dc335d4c407af00006e/train/javascript
//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
//https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
//https://www.codewars.com/kata/586ed14c35396d912100049a/train/javascript
//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
//https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
//https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
//https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript
//https://www.codewars.com/kata/57efcb78e77282f4790003d8/train/javascript
//https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript
//https://www.codewars.com/kata/5641c3f809bf31f008000042/train/javascript
//https://www.codewars.com/kata/58249d08b81f70a2fc0001a4/train/javascript
//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
//https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/train/javascript
//https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript
//https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
//https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
//https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/javascript
//https://www.codewars.com/kata/591588d49f4056e13f000001/train/javascript
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
//https://www.codewars.com/kata/562e98755e9214cd2500003d/train/javascript