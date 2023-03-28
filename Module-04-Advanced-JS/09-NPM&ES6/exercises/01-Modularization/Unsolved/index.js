// TODO: Import `maths.js`
const math = require("./maths.js");
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
console.log(process.argv);
let operation = process.argv[2];
let num1 = parseInt(process.argv[3]);
let num2 = parseInt(process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch (operation) {
  case "sum":
    console.log(math.sum(num1, num2));
    break;
  case "difference":
    console.log(math.difference(num1, num2));
    break;
  case "product":
    console.log(math.product(num1, num2));
    break;
  case "quotient":
    console.log(math.quotient(num1, num2));
    break;
}
