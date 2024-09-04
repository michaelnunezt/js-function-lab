// Exercise 1
function maxOfTwoNumbers(x,y) {
  if (x >= y ){
    return x;
  }
  else {
    return y;
  }
}

console.log(maxOfTwoNumbers(7,10)); // return 10 is the larger num
console.log(maxOfTwoNumbers(30,25)); // return 30 is the larger num
console.log(maxOfTwoNumbers(10,10)); // return 10 is equal num

// Exercise 2

// -Function - variable - (parameter)
function isAdult(age) {
  if (age >= 18) {
    return 'Adult';
  }
  else {
    return 'Minor';
  }
}

console.log(isAdult(21)); // return 'Adult' 
console.log(isAdult(18)); // return 'Adult'
console.log(isAdult(14)); // return 'Minor'

// Exercise 3
// i choose char as a character cause the exercise says to 
function isCharAVowel(char) {
  char = char.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
}
else {
  return false;
}
}

console.log(isCharAVowel('a'));
console.log(isCharAVowel('E'));
console.log(isCharAVowel('b'));
console.log(isCharAVowel('y'));

// Exercise 4

function generateEmail(name,domain) {
  return '${name}@${domain}';
}

console.log(generateEmail('michaelnunez','gmail.com'));

// Exercise 5

function greetUser(name, timeOfDay) {
  return 'Good ${timeOfDay}, ${name}!';
}

console.log(greetUser('Jacob', 'morning'));
console.log(greetUser('Samet', 'afternoon'));
console.log(greetUser('Marco', 'evening'));

// Exercise 6

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(maxOfThree(17, 4, 9)); // return 17
console.log(maxOfThree(5, 25, 15)); // return 25
console.log(maxOfThree(7, 7, 7)); // return 7

// Exercise 7
function calculateTip(billAmount, tipPercentage) {
  const tip = billAmount * (tipPercentage / 100);
  return tip;
}

console.log(calculateTip(50, 20)); // return 10 Example
console.log(calculateTip(100, 15)); // return 15
console.log(calculateTip(200, 18)); // return 36

// Exercise 8

function convertTemperature(temperature, scale) {
  let convertedTemperature;
  if (scale === 'C') {
    // Convert Celsius to Fahrenheit
    convertedTemperature = (temperature * 9/5) + 32;
  } else if (scale === 'F') {
    // Convert Fahrenheit to Celsius
    convertedTemperature = (temperature - 32) * 5/9;
  } else {
    throw new Error('Invalid scale. Use "C" for Celsius or "F" for Fahrenheit.');
  }
  
  return convertedTemperature;
}

console.log(convertTemperature(32, 'C')); // Should return 89.6 (Fahrenheit)
console.log(convertTemperature(32, 'F')); // Should return 0 (Celsius)
console.log(convertTemperature(100, 'C')); // Should return 212 (Fahrenheit)
console.log(convertTemperature(212, 'F')); // Should return 100 (Celsius)

// Exercise 9

function basicCalculator(num1, num2, operation) {
  let result;
  
  switch(operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      result = num1 / num2;
      break;
    default:
      throw new Error('Invalid operation. Use "add", "subtract", "multiply", or "divide".');
  }
  
  return result;
}

console.log(basicCalculator(10, 5, 'add'));       // Should return 15
console.log(basicCalculator(10, 5, 'subtract'));  // Should return 5
console.log(basicCalculator(10, 5, 'multiply'));  // Should return 50