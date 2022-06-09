//Conditionals

/* 
    A way for a programmer to check if an expression is true

    It can also check for falseness
    It can execute code when the condition is met, but also when the condition is NOT met.
    It can even execute code that checks for another condition altogether.

    The fundamental function of a conditional is to check for truthiness.

    Syntax:

    if ( conditional ) {
        fire this code if TRUE
    }
*/

let light = "on";

if (light == "on"){
    console.log("The light is on")
}

//Falsy values
/* 
    -false
    -0
    -null
    -undefined
    -NaN
    -"", '', `` (any empty string)
*/

let temperature = 53;

if (temperature >= 70){
    console.log("It's a nice summer day");
} else if (temperature >= 60) {
    console.log("It's probably spring.");
} else if (temperature < 32 ) {
    console.log("It's definitely winter");
}

// ! Challengee

/* 
Set a variable of age and give it a number of your choice.

    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log "sorry, you're too young to do anything."
    If the age is at least 18, "You can vote!"
    If the age is at least 21, "You can drink!"
    If the age os at least 25, "You can rent a car!"
*/

let age = 21;

if (age < 18)
{
    console.log("Sorry, you're too young to do anything.");
} else if (age < 21){
    console.log("You can vote!");
} else if (age < 25){
    console.log("You can drink!");
} else if (age >= 25){
    console.log("You can rent a car!");
} else {
    console.log("Unexpected Input");
}

// * doing this in reverse (highest age first) may be a better practice here..


// * Ternaries

let fName = "Paul"

if (fName === "Paul")
{
    console.log("I think he's an instructor");

} else {
    console.log("May be a student actually.");
}

/* 
    Syntax: if (condition) { do something } else { something else }

    Ternary Syntax: condition ? something if true : something if false
*/

fName === "Paul" ? console.log("Instructor") : console.log("Student");

let hero = "Batman";
let villain = "Riddler";

hero === "Batman" && villain === "Riddler" 
    ? console.log("What has a head and a tail but no body?")
    : hero == "Batman" && villain == "Joker"
    ? console.log("Why so serious?")
    : hero == "Batman" && villain == "Kiteman"
    ? console.log("What does Kiteman do?")
    : console.log("stop") ;


// Challenge

