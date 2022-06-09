// ? Comment comment comment

/*
Multi-line comment

Great big big comment

*/

// (1)   (2)  (3)   (4)
let firstName = "Paul";

console.log(firstName);

//1. Variable decleration
//2. variable's name
//3. assignment operator
//4. value initialization

let lastName;

console.log(lastName);

lastName = "Niemczyk";

console.log(lastName);

var age = 31;
console.log(age);
// ! Old, not best practices, use let instead
//console.log(isInstructor);

// const isInstructor = false;

// console.log(isInstructor);

// ! Const is immutable, must have value assigned; must be declared AND initialized

const isInstructor = true;

console.log(isInstructor);

// Best Practices for Variables

/*
    * Be concise
    * Be specific
    * Utilize camelCase, snake_case, PascalCase, or skewer-case
    * You can use nocase and SCREAMING_CASE
*/

//Equal and Strict Equal Operators

// double equals sign (==) means equals, single equals sign (=) used to assign value to variable

//type coercion: can occur with equals operator (==) tries to convert data-types into what it thinks the programmer wants... inherently dangerous

// Strict equality comparison (===) checks for matching values AND datatypes

// * create 7 or 8 variables, concatenate into your address

// * fName; mInitial; lName; streetName; houseNumber; city; stateCode; zipCode;

let fName = 'Nicholas';
let mInitial = 'R';
let lName = 'Gardam';
let streetName = 'Howe Blvd'
let houseNumber = 2;
let city = 'Canton';
let stateCode = 'NY';
let zipCode = '13617';
localStorage
// *Template Literal:

let myAddress = `${fName} ${mInitial} ${lName} \n
                ${houseNumber} ${streetName} \n
                ${city}, ${stateCode} ${zipCode}`;


console.log(myAddress);
