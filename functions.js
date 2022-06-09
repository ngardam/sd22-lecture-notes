//Functions

/* 
    A function is a block of reusable code that can take in parameters (doors), perform an action, and return the result.


    Two types of functions:
    * function declerations
        * are hoisted
    * function expressions
    *   * are not hoisted
    *   * arrow function expressions
    *       *concise body
    *       *block body
    Function syntax:



    function fxName(parameter1, parameter2)
    {
        block of code to run
        return statement
    }

    Functions have a default return statement of undefined unless a return is specified
*/

function fxDeclaration() {
    return "This is a function declaration's return statement"
}

let displayData = fxDeclaration();

console.log(displayData);


function greetUser(userName) {
    return `Good day, ${userName}`
}

console.log(greetUser());

console.log(greetUser('Nick'));

// Functions can have zero or many parameters
// Parameters act as doors to let arguments inside function.

console.log(greetUser()) // returns undefined because parameter is given & default is undefined.

//passing variables as arguments:

let user1 = "Nick";

console.log(greetUser(user1));


//Function Expression

/** Function expression utilizes a variable
 * as a placeholder
 */
//  (!!!)
let myDog = function(name, breed) {
    return `My dog, ${name} is a ${breed}`
}

console.log(myDog("Bentley", "Old English Bulldog"))

// * Arrow Functions

/*
Introduces in ES6
More concise way of writing functions.
Arrow functions are created using function expressions ONLY
They do not bind to .this or super
*/

// * Concise Body Arrow Function

//Can onmly have one parameter if it's not enclosed by ()

//Can have implicit return statement ONLY without using {}

let greetEveryone = () => console.log("Hello Class");

greetEveryone();

let greetPerson = name => console.log(`Hello, ${name}`)

greetPerson("Nick");

//* Block Body Arrow Function

let sendEmail = (email, name) => {

    let greet = "What's up, "

    return `${greet}${name}:
    
    We've been trying to reach you about your car's \n
    extended warranty. Oh my dog, not this crap again!
    \n
    
    Sincerely, \n
    
    ${name}`
}

console.log(sendEmail("test@gmail.com", "paul"));

// ! Challenge

/*
    Create an arrow function expression named tipCalculator

    It will take a pre-tax bill, sales tax, and tip percentage as parameters.

    It will return a string interpolated bill total and tip amount
*/

let calculateTaxAndTip = (preTax, salesTaxPercentage, tipPercentage) => {

    //let tipAmount = (tipPercentage / 100) * preTax;

    let tax = (salesTaxPercentage / 100) * preTax;

    totalWithTax = preTax + tax;
    
    let tipAmount = (tipPercentage / 100) * totalWithTax;
    
    return `\n Total bill with ${salesTaxPercentage}% sales tax added: $${totalWithTax.toFixed(2)} \n 
        ${tipPercentage}% tip: ${tipAmount.toFixed(2)}`;

}

console.log(calculateTaxAndTip(20.00, 10, 15));

console.log(calculateTaxAndTip(20.34, 13, 12));