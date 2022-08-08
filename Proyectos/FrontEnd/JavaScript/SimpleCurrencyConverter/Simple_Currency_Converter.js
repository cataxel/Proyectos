const input = require('sync-input');
console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");
var x = 0;
const array = [1, 113.5, 0.89, 74.36, 0.75];
const concurrency = ["USD", "JPY", "EUR", "RUB", "GBP"];
let result = 0;
let value = 0;
let option = 0;
do {
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");
  option = Number(input());
  switch (option) {
    case 1:
      console.log("What do you want to convert?");
      let type;
      let a = input("From: ").toUpperCase();
      if (concurrency.includes(a)) {
        type = input("To: ").toUpperCase();
        if (concurrency.includes(type)) {
          Currency(a, type);
        } else {
          console.log("Unknown currency");
          continue;
        }
      } else {
        console.log("Unknown currency");
        continue;
      }
    case 2:
      console.log("Have a nice day!");
      break;
    default:
      console.log("Unknown input");
      continue;
  }
  if (option == 2){
    break;
  } else if (option != 1) {
    continue;
  }
} while (true);

function Currency(a, type) {
  do {
    switch (a) {
      case "USD":
        value = array[0];
        Convert(type, a, value);
        break;
      case "JPY":
        value = array[1];
        Convert(type, a, value);
        break;
      case "EUR":
        value = array[2];
        Convert(type, a, value);
        break;
      case "RUB":
        value = array[3];
        Convert(type, a, value);
        break;
      case "GBP":
        value = array[4];
        Convert(type, a, value);
        break;
      default:
        console.log("Unknown currency");
        break;
    }
  } while (x != 0);
}
function Convert(type, a, value) {
  do {
    switch (type) {
      case "JPY":
        number = amount();
        console.log(typeof (number));
        if (number != 0) {
          result = ((1 / value) * number) * array[1];
          x = 1;
          operation(x, number, a, result.toFixed(4));
        }
        break;
      case "EUR":
        number = amount();
        if (number != 0) {
          result = ((1 / value) * number) * array[2];
          x = 2;
          operation(x, number, a, result.toFixed(4));
        }
        break;
      case "RUB":
        number = amount();
        if (number != 0) {
          result = ((1 / value) * number) * array[3];
          x = 3;
          operation(x, number, a, result.toFixed(4));
        }
        break;
      case "USD":
        number = amount();
        if (number != 0) {
          result = ((1 / value) * number) * 1;
          x = 0;
          operation(x, number, a, result.toFixed(4));
        }
        break;
      case "GBP":
        number = amount();
        if (number != 0) {
          result = ((1 / value) * number) * array[4];
          x = 4;
          operation(x, number, a, result.toFixed(4));
        }
        break;
      default:
        console.log("Unknown currency");
        break;
    }
  } while (x != 0);
}
function amount() {
  number = Number(input("Amount: "));
  if (number >= 1) {
    return number;
  } else if (number <= 0) {
    console.log("The amount cannot be less than 1");
  } else {
    console.log("The amount has to be a number");
  }
}
function operation(number, amount, type, result) {
  let r = concurrency[number];
  console.log(`Result: ${amount} ${type} equals ${result} ${r}`);
}