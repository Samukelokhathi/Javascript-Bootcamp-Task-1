//Conditional Statements & Loops

// If statments

let temperature = 0

if (temperature < 0) {
    console.log("It's freezing!")
} else if (temperature >= 0 && temperature <= 15) {
    console.log('It\'s cold.')
} else if (temperature >= 16 && temperature <= 25) {
    console.log('It\'s mild.')
} else {
    console.log("It's warm.")
}

// Divisibility Check 

let divisibleBy3 = 3;
let divisibleBy2 = 2;
let number = 7;

if (number % divisibleBy2 === 0 && number % divisibleBy3 === 0) {
    console.log("Divisible by both.")
} else if (number % divisibleBy2 === 0) {
    console.log("Divisible by 2")
} else if (number % divisibleBy3 === 0) {
    console.log("Divisibile by 3")
} else {
    console.log("Not divisible by 2 and 3")
}

// For Loop 

// numbers from 1 - 10
for (let num = 1; num <= 10; num++) {
    // console.log(num)
}

for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        // console.log(num)
    }
}

// Each 
let sum = 0;
for (let num = 1; num <= 100; num++) {
    sum += num
}
// console.log(sum)


// Loops with array

const numbers = [1, 2, 3, 4, 5];
for (let num = 1; num <= numbers.length; num++) {
    // console.log(num)
}

const numbersArr = [3, 7, 2, 5, 10, 6]
let currentValue;
let prevValue;

for (let num = 0; num < numbersArr.length; num++) {
    console.log(num)
}
