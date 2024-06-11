const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

// console.dir(pokemon, { maxArrayLength: null })
// console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
console.log('-----------------------------Exercise 3')

game.difficulty = 'Easy'
console.log(game)
/////////////////////////////////////////

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
console.log('-----------------------------Exercise 4')

const pokemonName = 'Butterfree'
const indexByName = pokemon.findIndex((pokemon) => {
    return pokemon.name === pokemonName
})
// console.log(indexByName)

const setStarter = () => {
    pokemon[indexByName].starter = true
    game.party.push(pokemon[indexByName].name)
}
setStarter()
console.log(`Starter pokemon is ${game.party} and the property starter from pokemon array is set to ${pokemon[indexByName].starter}`)
///////////////////////////////////////////////////

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
console.log('-----------------------------Exercise 5')

const theeAdded = (pok1, pok2, pok3) => {
    game.party.push(pok1, pok2, pok3)
}
theeAdded('Pidgey','Weedle','Charizard')
console.log(game.party)
/////////////////////////////////////////////////

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
console.log('-----------------------------Exercise 6')

game.gyms.forEach((gyms) => {
    if (gyms.difficulty < 3) {
        gyms.completed = true
    }
})
console.log(game.gyms)
///////////////////////////////////

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
console.log('-----------------------------Exercise 7')

const evolvedIndex = indexByName + 1      //The var indexByName is defined in line 50 of ercercise of ercercise #4.
const evolvedPokemon = pokemon[evolvedIndex].name
console.log(evolvedIndex)
console.log(evolvedPokemon)

const setEvolvedStarted = () => {
    pokemon[evolvedIndex].starter = true
    game.party.splice(0, 1, evolvedPokemon)
}
setEvolvedStarted()
console.log(pokemon[evolvedIndex])
console.log(`Party array with evolved pokemon: ${game.party}`)
/////////////////////////////////////////////

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
console.log('-----------------------------Exercise 8')
game.party.forEach((element) => {
    console.log(element)
})
////////////////////////////////////////////

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
console.log('------------------------------Exercise 9 forEach')
pokemon.forEach((pokemon) => {
    if (pokemon.starter === true) {
        console.log(pokemon.name)
    }
})
console.log('------------------------------Exercise 9 filter & forEach')
pokemon.filter((pokemon) => {
    return pokemon.starter === true
}).forEach((pokemon) => {
    console.log(pokemon.name)
})
//The above ercercise can be done with reduce method as well. PRACTICE.
////////////////////////////////////////////////

/*
Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
console.log('-----------------------------Exercise 10')

game.catchPokemon = (pokemonObj) => {
    game.party.push(pokemonObj)
}

game.catchPokemon(pokemon[1])
console.log(game.party)
////////////////////////////////////////////

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
console.log('-----------------------------Exercise 11')
console.log(`Number of pokeballs before method call ${game.items.length}`)
game.catchPokemon = (pokemonObj) => {
    game.party.push(pokemonObj)
    game.items.splice(0, 1)
    console.log(`Number of pokeballs after method is call ${game.items.length}`)
}

game.catchPokemon(`Charmeleon`)
console.log(`Pokemons in the party array: ${game.party}`)
//////////////////////////////////////////

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
console.log('-----------------------------Exercise 12')

game.gyms.forEach((gyms) => {
    if (gyms.difficulty < 6) {
        gyms.completed = true
    }
})
console.log(game.gyms)
////////////////////////////////////////////

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
console.log('-----------------------------Exercise 13')

game.gymStatus = () => {
    const gymTally = { completed: 0, incomplete: 0 }
    game.gyms.forEach((gyms) => {
        if (gyms.completed === true) {
            gymTally.completed += 1
        }else{
            gymTally.incomplete += 1
        }
    })
    console.log(gymTally)
}

game.gymStatus()
////////////////////////////////////////////

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
console.log('-----------------------------Exercise 14')

game.partyCount = () => {
    return game.party.length
}
console.log(`Return of the lenght of party: ${game.partyCount()}`)

//Using a reduce method
game.partyCount = game.party.reduce((total, currentVal) => {
    // console.log(`Iteration: ${currentVal}`)
    total += 1

    return total
},0)
console.log(`Returning with a reduce method: ${game.partyCount}`)
////////////////////////////////////////

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar 
to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
console.log('-----------------------------Exercise 15')

game.gyms.forEach((gyms) => {
    if (gyms.difficulty < 8) {
        gyms.completed = true
    }
})
console.log(game.gyms)
//////////////////////////////////////////

/*
/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log('-----------------------------Exercise 16')

console.log(game)
