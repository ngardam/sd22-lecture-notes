//Objects

/*
    Object - container for values in JavaScript Object Notation Format (JSON)
    -exists as a string
    -has properties and methods
        - .property
        - .method()
    -has .this keyword
*/

let abby = {
    species: "dog",
    color: "brown",
    spayed: true,
    breed : "mutt",
    weight: 40,
    favoriteActivity: "chasing squirrels"
}

console.log(abby) //shows us entire object with all key:value apirs

console.table(abby) //displays in table format

console.log(abby.species) //access property values

console.log(abby["color"]) //access using keys

let returnKeys = Object.keys(abby)  //returns an array of all properties/keys
console.log(returnKeys);

let returnValues = Object.values(abby)  //returns an array of all values
console.log(returnValues);

// ? property and value creation

//Objects are MUTABLE (can be changed)

//create an object mcmChair with property of frame; frameFinish; cushion; upholstery

let mcmChair = {
    frame: "",
    frameFinish: null,
    cushion: undefined,
    upholstery: "Leather"

}

console.log(mcmChair);


let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
                numberOfEpisodes: 5,
                episodeInfo: [
                    {episode: 1, episodeName: "Pilot"},
                    { episode: 2, episodeName: "Flying"},
                    {episode: 3, episodeName: "Tahani Al-Jamil"},
                    { episode: 4, episodeName: "Jason Mendoza"},
                    { episode: 5, episodeName: "Category 55 Emergency"}

                ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                {episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                {episode: 4, episodeName: "Existential Crisis"},
                {episode: 5, episodeName: "The Trolley Problem"}
            ]
        }
    }
}

// console log season 2 ep 1

console.log(netflix.id);

// console.log(netflix.seasonInfo.season2.episodeInfo;

console.log(netflix.seasonInfo.season2.episodeInfo[0].episodeName);


//Assign a property called total seasons to the object with a value of what the total seasons are

//add a season 3 that look just like 1 & 2

//assign episodeInfo property to season 3 with an array with two episodes.

netflix.numberOfSeasons = 3;

// console.log(netflix.numberOfSeasons);

netflix.seasonInfo.season3 = {
    numberOfEpisodes: 2,
    episodeInfo : [
        {episode: 1, name: "Everything is Bonzer!"},
        {episode: 2, name: "The Brainy Bunch"}

        ]
        
};

//netflix.seasonInfo.season3.numberOfEpisodes = 2;

// netflix.seasonInfo.season3.episodeInfo = [
//     {episode: 1, name: "Everything is Bonzer!"},
//     {episode: 2, name: "The Brainy Bunch"}
//     ]

console.log(netflix);

console.log(netflix.seasonInfo.season3)

// ? deletion

console.log(mcmChair);

delete mcmChair.frame;   // ! dangerous, future access compromised and error-prone

console.log(mcmChair);

// ! instead

mcmChair.newKey = null;

console.log(mcmChair);