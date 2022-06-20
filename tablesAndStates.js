// Lookup Tables

/*
    Lookup Tables are objects

    Allow us to associate strings with a list of other values.

    It's quick and efficient.

    Ex: months { "January": ["Jan", 01, 1, "I"]}

*/

function getPoemTitle(authorUserSelect) {
    let poemTitlesByAuthor = {
        "Robert Frost": "Stopping by Woods on a Snowy Evening",
        "Shell Silverstein": "Falling Up",
        "Sylvia Plath": "The Bell Jar"
    }


    return poemTitlesByAuthor[authorUserSelect];
}

console.log(getPoemTitle("Sylvia Plath"));


//Try to make a function that gets a song fdrom a list of musicians and song titlesS

function getSongFromMusician(musician){
    let songsByMusician = {
        "Tom Waits": ["A Little Rain", "Underground"],
        "The Strokes": ["Last Night", "Is this it"],
        "The Beatles": ["Hey Jude", "Octopus' Garden"]
    };
    return songsByMusician[musician];
}

console.log(getSongFromMusician("Tom Waits"));


/*
State Machine:

    System with finite and defines states. States are just information.
    The information is reliant upon logic in order to transition or be reassigned.
*/


let trafficLight = {
    red: ["green", "yield"],
    yellow: ["red"],
    green: ["yellow"],
    yield: ["red"]
}

let currentState = "green"

function enterState(newState) {
    let validTransitions = trafficLight[currentState];
    if (validTransitions.includes(newState)) {
        currentState = newState
    } else {
        throw `Invalid state transition from ${currentState} to ${newState}`
    }
}

enterState("yellow");

console.log(currentState);

enterState("green");

console.log(currentState)