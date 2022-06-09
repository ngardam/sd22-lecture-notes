// IO & Callbacks Lesson

/* 
    * Process is an event that currently runs in the foreground or background on your local machine.

    * Node.js allows access to its processes via a process object.

    * This helps us deal with processing external input and internal output (IO) into and out of our file/program. The file becomes a process when it's executed.

    * This is done using process.stdin and process.stdout properties.

*/

// import {stdin, stdout} from "node:process";


// console.log("Hello");

// Event Listeners

/*
    Ex: .once() method

    * A way of handling user input
    * They take two parameters: (event, and action)
    *   *Event specifies when the action will fire
    *   *Action is a callback function that does something when the ecvent occurs.
*/

// *Callback Functions

/* 
    *Are simply functions that will be called upon inside of another function
    or a method when an event occurs/

*/

// Example of callback function inside another function

function getName(name) {
    return name;
}

function getPorche(winnersName) {
    let winner = getName(winnersName)
    console.log('Congrats, you a winner, ' + winner);
}

getPorche('Nick');

// process.stdin.once("data", (input) => {
//     console.log(input.toString())
// });


// * event listener w/ function declaration

/* 
process.stdin.once("Data", function(input) {
    console.log(input.toString())
})
*/

/* 
    Let's set up a listen on standard-input (stdin) so that when we type something, node will reply with what we say + the word ... butts.

    We also created a thanksForPlaying function that is being used as a callback when the event listener inside handleInput senses an event. This prints lines 77 +78 to console then exits process at line 79
*/

// function handleInput(input) {
//     console.log(input.toString().trim() + "...butts.");

//     process.stdin.once("data", thanksForPlaying);
// }

// function thanksForPlaying(input){
//     console.log(input.toString().trim() + "... Thanks for playing.");
//     console.log("All done.");
//     process.exit();                     // *This kills the process
// }

// process.stdin.once("data", handleInput);


process.stdin.on("data", (input) => {
    // Writeable Steam (Output of IO)
    process.stdout.write(`This is the input: ${input.toString()}`) 
    
})

process.stdin.on("end", () => {
    process.stdout.write("Fires only during graceful end.")
})