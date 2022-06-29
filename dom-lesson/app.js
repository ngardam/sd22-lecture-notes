        // function sayName(name) {
        //     alert(`Hello, ${name}`);

            
        // }

        // sayName('Nick')


        console.log(document)  // * document is page

        console.log(window)  // * window is the browser itself

        // *DOM

        /*
            Data representation of the objects that comprise the structure and content of a document on the web.

            Basic Structure:
                -Document
                    -HTML
                        -Head
                            -Meta tags
                            -Link tags
                            -Title tag
                        -Body
                            -Nav
                            -Header
                            -Divs
                            -H1's, imgs, aside's and so on...
                            -And any of their attributes
        */

// 1. use createElement method on a document object and specify the (type of?) element you want to create. Assign it to a variable for future modification.

let ourh1 = document.createElement("h1")

// 2. Setting text of element ourh1
ourh1.innerText = "Creating my first DOM element."

ourh1.style.color = "blue"

ourh1.style.textAlign = "center"
// console.log(ourh1);

// 3. add ourh1 to document body

document.body.appendChild(ourh1)

let listItems = document.getElementsByTagName("li")

console.log(listItems);

let liBathroom = document.getElementsByTagName("li")[0]
liBathroom.style.color = "red";

/* 
        .getElementsByTagName

        HTMLCOllection
            -Array-like object
            - Allows access to index, properties, and methods to help navigate and modify
            - ! Does NOT allow to modify a group of elements all at once.
            -Can loop through it
            -Can use .length property to get the size of the list
        To get element
            -use array notation
            -use .item() method
        Accessing Multiple Elements required these methods:
            -querySelectorAll
            -getElementsbyTagName
            -etc.

*/

// * Document.querySelector

/* 
    returns the first element which matches the specified selector(as in CSS selectors)
        or NULL if not found
    */

let firstLi = document.querySelector("li")

firstLi = document.querySelector("#listTitle")

let nodeListLi = document.querySelectorAll("li")  // * Any selector will do

console.log(nodeListLi.textContent);

console.log(nodeListLi)
    
    // ! nodeList is static list


let newListItem = document.createElement("li")
newListItem.textContent = "new list item"

let toDoList = document.getElementById("ulToDo")

let toDoNodeList = document.querySelectorAll("li")

toDoList.appendChild(newListItem)

// toDoNodeList.append(newListItem);  ! Cannot Append to node List

for (let i of listItems){
    i.style.color = "brown"
}

// ! Node list is like static... if I add to it, list will not update


/* 
    * Event Listeners

    Evenet listener allows us to execute a function when a particular event occurs.
        -.addEventListener() takes an event and callback function
        - event - what happens
        - callback function - action tied to the event
*/
let button = document.getElementById("submit");

// ! Hey look it's a button listener!
button.addEventListener("click", (event) => {
    console.log(event)
    console.log("Someone clicked the button yo!")
});


//module.export
//const require() imports

// Morning Challenge

/* 
Create a function that takes an object and first:
    - Checks if the object exists. If it doesn't you want to return, "no object found"
    - If the object exists, create a div that will hold an h2 with the name of the show that it's bringing in
    -Name > Season > <p>Episode #, <p>episode name
    -Inside the div, create another div that will hold an episode number as a paragraph and an apisode name a paragraph
    - This div will be created for each instance of an object    
*/

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

function displaySeriesInfo (object) {
    if (object === undefined){
        return console.log("No object found")
    } else
    {
        let mainDiv = document.createElement("div")

        let showTitle = document.createElement("h2")

        showTitle.textContent = object.name;

        mainDiv.appendChild(showTitle);

        mainBody.appendChild(mainDiv);

        // document.body.appendChild

        let seasons = Object.keys(object.seasonInfo)

        console.log("seasons: " + seasons)

        for (let i = 0; i < seasons.length; i++)
        {
            let seasonDiv = document.createElement("h3")

            console.log("season: " + object.seasonInfo[seasons[i]])

            let epInfo = object.seasonInfo[seasons[i]]

            console.log("epInfo: " + epInfo[0])

            // console.log(object.seasonInfo[myKey])

            seasonDiv.textContent = seasons[i];

            // let episodesArray = object.seasonInfo[myKey]

            for (let episode of epInfo)              // ! Object.keys(seasoninfo.season)  ??? take a look at this keys thing
            {
                let epDiv = document.createElement("div")
                let epNumber = document.createElement("p")
                let epName = document.createElement("p")

                epNumber = episode.episode;
                epName = episode.episodeName;
                console.log("EP #" + epNumber + ", Name: " + epName)

                seasonDiv.appendChild(epDiv);

                epDiv.appendChild(epNumber);
                epDiv.appendChild(epName);
            }



            showTitle.appendChild(seasonDiv)
        }

    }



}

let mainBody = document.querySelector("body")

// mainBody.appendChild(main)

displaySeriesInfo(netflix);

// displaySeriesInfo();