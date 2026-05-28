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
let number = 9;

if (number % divisibleBy2 === 0 && number % divisibleBy3 === 0) {
    console.log("Divisible by both.")
} else if (number % divisibleBy2 === 0) {
    console.log("Divisible by 2")
} else if (number % divisibleBy3 === 0) {
    console.log("Divisibile by 3")
} else {
    console.log("Not divisible by 2 and 3")
}

switch (true) {
    case number % divisibleBy2 === 0 && number % divisibleBy3 === 0:
        console.log("Divisible by both.")
        break;

    case number % divisibleBy2 === 0:
        console.log("Divisible by 2")
        break;

    case number % divisibleBy3 === 0:
        console.log("Divisibile by 3")
        break;

    default:
        console.log("Not divisible by 2 and 3")
        break;

}

// For Loops

// 1. Printing numbers from 1 - 10
for (let num = 1; num <= 10; num++) {
    // console.log(num)
}

// 2. Even number from 1 - 20 
for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        // console.log(num)
    }
}

// 3. Sum of all numbers from 1 to 100
let sum = 0;
for (let num = 1; num <= 100; num++) {
    sum += num
}
// console.log('Sum:', sum)


// 4. Loops with array

const numbers = [1, 2, 3, 4, 5];
for (let num = 0; num < numbers.length; num++) {
    // console.log(numbers[num])
}

// 5. Printing Large Numbers
const numbersArr = [3, 7, 2, 5, 10, 6]
let largestNumber = 0;

for (let num = 0; num < numbersArr.length; num++) {
    if (numbersArr[num] > largestNumber) {
        largestNumber = numbersArr[num]
    }
}
// console.log(largestNumber)


// While loop

// 1. Printing Numbers from 1 - 10 
count = 1

while (count <= 10) {
    // console.log(count)
    count++
}

//  2.Print all even numbers between 1 and 20.

let evenNumber = 1;

while (evenNumber <= 20) {
    if (evenNumber % 2 == 0) {
        // console.log(evenNumber)
    }
    evenNumber++
}

// 3.Calculate the sum of all numbers from 1 to 100 and print the result. 


let sumOfNumbers = 0;
let currentNumber = 1;

while (currentNumber <= 100) {
    sumOfNumbers += currentNumber
    currentNumber++

}
// console.log(sumOfNumbers)


// 4. Print all multiples of 5 less than 50.
let limit = 50;
let divisibleBy5 = 1
while (divisibleBy5 < limit) {
    if (divisibleBy5 % 5 === 0) {
        // console.log(divisibleBy5)
    }
    divisibleBy5++
}


// Do while Loop
// 1.Print numbers from 1 to 10. 

let numbersTo10 = 1;
do {
    // console.log(numbersTo10)
    numbersTo10++
} while (numbersTo10 <= 10)

// 2. Calculate the sum of all numbers from 1 to 100 and print the result. 

let totalNumber = 0;
let eachNum = 0;
do {
    totalNumber += eachNum
    eachNum++
} while (eachNum <= 100)

console.log(totalNumber)