function logSumTwoUserInputNumbers() {
  const userInput1 = prompt("Enter number: ");
  const userInput2 = prompt("Enter number: ");

  const checkUserInput1 =
    userInput1 === "" ||
    userInput1 === null ||
    Number.isNaN(Number(userInput1));
  const checkUserInput2 =
    userInput2 === "" ||
    userInput2 === null ||
    Number.isNaN(Number(userInput2));

  if (checkUserInput1 || checkUserInput2) {
    console.log("error! value must be number!");
  } else {
    const suma = Number(userInput1) + Number(userInput2);
    console.log(suma);
  }
}
logSumTwoUserInputNumbers()
