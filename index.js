
  const userInput1 = prompt("Enter number: ", 6);
  const userInput2 = prompt("Enter number: ", 3);


  if (checkNumber(userInput1)===false || checkNumber(userInput2)===false) {
    console.log("error! value must be number!");
  }else{
  console.log(getSumTwoNumbers(Number(userInput1), Number(userInput2)));
}

/**
 * get suma two any numbers
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
function getSumTwoNumbers(number1, number2) {
  // const suma = Number(number1) + Number(number2);
  // return suma;
  return number1 + number2;
}
/**
 * 
 * @param {any} value 
 * @returns {boolean}
 */
function checkNumber(value){
  const checkValue =
  value === "" ||
  value === null ||
  Number.isNaN(Number(value));
  return !checkValue; 
}




// console.log(getSumTwoNumbers(Number(userInput1), Number(userInput2)));
// console.log(getSumTwoNumbers(2,3));





