const getPokemonDbByName = require("./getPokemonDbByName.js");
const getPokemonAPIByName = require("./getPokemonAPIByName.js");

const getPokemonByName = async (name) => {
    let pokemon = await getPokemonAPIByName(name);
    //si al obtener por el nombre indicado en la API me larga un error con la propiedad msg, busca en la base de datos
    if (pokemon.msg) {
      pokemon = await getPokemonDbByName(name);
      pokemon = JSON.parse(JSON.stringify(pokemon));
      pokemon.types = pokemon.types.map(t => t.name);
      return pokemon;
    }
    return pokemon;

};
module.exports = getPokemonByName;
