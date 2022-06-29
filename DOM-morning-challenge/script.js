// Morning warmup

/* 
    Build a search bar with a search button that will allow access to the values of the user input.

    Build a function that will take that user input and sanitize it all to lower case. Then, it will return a boolean if any of the input includes the word "cat".

    ! Spicey

    Create an unordered list with 5 list items. Give them whatever value you want. Then use the netflix object to reassign the values in the unordered list with the values of the episode names of whichever season you want.
*/

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    }
}



let myForm = document.getElementById("search-form");

let userInput = document.getElementById("user-input");

myForm.addEventListener("submit", evt => {

    

    evt.preventDefault();

    let input = userInput.value;

    let lowerCaseInput = input.toLowerCase();

    let hasCat = false;

    if(lowerCaseInput.indexOf("cat") !== -1){
        hasCat = true;
    }

    let catInformation = document.createElement("p");

    catInformation.textContent = "Cat: " + hasCat;

    document.body.appendChild(catInformation);

    

})

let myListItems = document.getElementsByTagName("li");



console.log(myListItems);

// let listArray = Array.from(myListItems);

// console.log(listArray);

for (let i in netflix.seasonInfo.season1){
    myListItems[i].textContent = netflix.seasonInfo.season1[i].episodeName  // ! find out why this isn't working
}