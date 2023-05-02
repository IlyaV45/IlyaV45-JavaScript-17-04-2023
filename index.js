const userInput = prompt("Enter number: ", 5)


if (userInput === "" || userInput === null || Number.isNaN(Number(userInput))) {
  console.log("error");
} else {
  console.log(userInput, Number(userInput));
}
