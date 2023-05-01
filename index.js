// const number = 12;

// if (number === 0) {
//   console.log('true number', number)
// }
// else{
//     console.log('false number', number)
// }

// let number = 4;
// if (number >= 0) {
//     console.log('positive')
// }
// else{
//     console.log('negative')
// }

// if (number < 0) {
//     console.log('negative')
// }
// else{
//     console.log('positive')
// }
// debugger
// if (number>0) {
//     console.log('positive');
// }else if (number === 0) {
//     console.log('zero');
// }else if (number < 0){
//     console.log('negative');
// }

// if (number%2 === 0) {
//     console.log('even');
// }else{
//     console.log('odd')
// }
// if (number > 7 && number % 3 ===0) {
//     console.log('win')
// } else {
//     console.log('lose')
// }
// if (number <= 7 || number % 3) {
//     console.log('lose')
// } else {
//     console.log('win')
// }
// if (number % 2 === 0 && number > 0) {
//   console.log("number", number + 5);
// } else if (number % 2 && number > 0) {
//   console.log("number", number * 2);
// } else if (number % 2 === 0 && number < 0) {
//   console.log("number", -number);
// } else {
//   console.log("number");
// }

// if (number % 2 === 0 && number > 0) {
//   number += 5;
// } else if (number % 2 && number > 0) {
//   number *= 5;
// } else if (number % 2 === 0 && number < 0) {
//   number = -number;
// }

// if (number > 0) {
//   if (number % 2 === 0) {
//     number += 5;
//   } else {
//     number *= 2;
//   }
// } else if (number % 2 === 0 && number < 0) {
//   number = -number;
// }

// console.log(number);

// let num1 = 3;
// let num2 = 3;
// let result;

// if (num1 % 2 === 0 && num2 % 2 === 0) {
//   result = num1 + num2;
// } else if (num1 => num2) {
//   result = num1 - num2;
// }  else if (num1 <= num2) {
//     result = num2 - num1;
//   }

// console.log(result);

let num1 = 5;
let num2 = 10;
let res;

if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
  res = num1 * num2;
} else {
  res = num1 / num2;
}
if (num1 === 0 && num2 === 0) {
  res = "NaN";
} else {
  res = res;
}
if (num1 === 0) {
  res = num2;
} else {
  res = num1;
}
console.log(res);

const num =25;
if (num > 0 && num % 2 && num % 4 && num %7 ) {
  console.log("lose")
} else {
  console.log("win")
}
