const getPokemonDbByName = require("./getPokemonDbByName.js");
const getPokemonAPIByName = require("./getPokemonAPIByName.js");


const getPokemonByName = async (name) => {
    let pokemon = await getPokemonAPIByName(name)
    if(pokemon.msg){
        pokemon = await getPokemonDbByName(name)
        return pokemon
    }
    return pokemon


}
module.exports = getPokemonByName;