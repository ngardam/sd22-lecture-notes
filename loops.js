// Loops


/*
    * Allow us to go over a block of code a determined amount of cycles.

*/

// While Loop

/* 

    * Executed a statement inside of a code block provided that the condition continues to evaluate to true.

    * The condition is evaluated before excecuting the statement
*/

// let randInt = 75;

// while(randInt > 0) {
//     randInt = randInt - 1;
//     console.log(randInt);
// }

// while (true) {
//     randInt = randInt +1;
//     console.log(randInt);
// }

//This is an infinite loop
//Condition never resolves

// For loops

/* 
    *We have to setup our loop in a way where we can:
        * see where we are in a loop
        * consider the condition we run it against
        * note when we are done with that contition
*/

// for (let i = 0; i <= 100; i++){
//     console.log(i);
// }

let longWord = "Supercalifragilisticexpialidocious";

for (let i = 0; i < longWord.length; i++) {
    console.log(longWord[i], i);
}

// For In Loops
// Great for anything index or number related

let i = 0;

for (i in longWord) {
    console.log(i)
}


// For of loops
//Great for iterable objects

for (i of longWord) {
    console.log(i)
}

/* 
For in and For of loops iterate for the length of the iterable ()

*/


i = 0;

do {
    console.log(longWord[i]);
    i++;
} while (i< longWord.length)

// Fizzbuzz Challenge

/*
    * Create an arrow function expression called fizzBuzz that takes one parameter. This paremter will take in an amount of numbers that a loop within a function will iterate over. In the loop, have a condition that checks if:
    * a number divisible by 3, print "Fizz"
    *  ''                   5, print "Buzz"
    * a number is divisible by 3 & 5, print "FizzBuzz"
    * else print "Actual number is not divisible by 3, 5, nor both."
*/