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