console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");
console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
console.log("Type the currency you wish to convert: USD");
const input = require('readline-sync');
var x = 0;
let number = 0;
const array = [1, 113.5, 0.89, 74.36, 0.75];
const concurrency = ["USD", "JPY", "EUR", "RUB", "GBP"];
function amount() {
  number = Number(input.question("Amount: "));
  if (number >= 1) {
    return number;
  } else if (number < 1) {
    console.log("The amount cannot be less than 1");
  } else {
    console.log("The amount has to be a number");
  }
}
function operation(number, amount, result) {
  let type = concurrency[number];
  console.log(`Result: ${amount} USD equals ${result} ${type}`);
}
function Currency() {
  let type = input.question("To: ");
  type = type.toUpperCase();
  do {
    type = type.toUpperCase();
    console.log(type);
    if (type == "JPY") {
      number = amount();
      let result = array[1] * number;
      x = 1;
      operation(x, number, result.toFixed(4));
      break;
    } else if (type == "EUR") {
      number = amount();
      let result = array[2] * number;
      x = 2;
      operation(x, number, result.toFixed(4));
      break;
    } else if (type == "RUB") {
      number = amount();
      let result = array[3] * number;
      x = 3;
      operation(x, number, result.toFixed(4));
      break;
    } else if (type == "USD") {
      number = amount();
      let result = array[0] * number;
      x = 0;
      operation(x, number, result.toFixed(4));
      break;
    } else if (type == "GBP") {
      number = amount();
      let result = array[4] * number;
      x = 4;
      operation(x, number, result.toFixed(4));
      break;
    } else {
      console.log("Unknown currency");
    }
  } while (x != 0);
}
Currency();