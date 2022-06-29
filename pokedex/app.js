// 1. Grab all elements that will need to be dynamic


let cardImg = document.querySelector("html body div.container div.card div.card-img")

let name = document.querySelector(".name")

let hp = document.querySelector(".hp")

let ability = document.querySelector(".ability")

let weight = document.querySelector(".weight")

let button = document.querySelector(".submit-btn")


button.addEventListener("click", e => {
    e.preventDefault()
    console.log("click")

    let input = document.querySelector(".search-input").value

    // console.log(input.value);

    // fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

    // const data

    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        const data = await response.json()
        // console.log(data)
        name.textContent = data.name
        // console.log(cardImg.firstElementChild.attributes[0])

        cardImg.firstElementChild.src = data.sprites.front_shiny

        hp.textContent = data.stats[0].base_stat;

        ability.textContent = data.abilities[0].ability.name;

        weight.textContent = data.weight
    }

    getPokemon()


})



// weight.textContent = 300;
// let weight = 

// cardImg.style.backgroundColor = "clear";  // *Hey! it worked

