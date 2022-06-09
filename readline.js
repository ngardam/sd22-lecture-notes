const readline = require("readline"); //Imports readline to our file to be used.

const interface = require("node:readline/promises");

//We can now access all of readline's methods and properties by using readline variable.

const readlineInterface = readline.createInterface(
    process.stdin,
    process.stdout
);

const rlPromiseInterface = rlPromise.createInterface(
    process.stdin,
    process.stdout
);

// function ask(questionText) {
//     return new Promise((resolve, reject) => {
//         readlineInterface.question(questionText, resolve);
//     })
// }

// readlineInterface.setPrompt("What is your name?: ");
// readlineInterface.prompt();
// readlineInterface.on("line", (q) => {
//     console.log('')
// })

// ask()

// console.log("Running the code.....");

// const promiseAnswer = rlPromiseInterface.question("What do you think of the class?");

// promiseAnswer.then((answer) => {
//     console.log("You replied:");
//     console.log(answer.toUpperCase());
//     console.log('Thank you for the feedback!');
//     rlPromiseInterface.close();
// })

// function handleAnswer(answer) {


// console.log("You replied:");
// console.log(answer.toUpperCase());
// console.log('Thank you for the feedback!');

// readlineInterface.close();
// }


// readlineInterface.question("How do you like the class so far? ", handleAnswer);


// const answer = await rlPromiseInterface.question("What do you think of the class?");
// console.log("You replied:");
// console.log(answer.toUpperCase());
// console.log('Thank you for the feedback!');