const getPokemonsFromApi = require("./getPokemonsFromApi.js");
const getPokemonsFromDb = require("./getPokemonsFromDb");

const getAllPokemons = async () => {
  try {
    //LLamo a los pokemons de la Db y de la API
    const pokemonsApi = await getPokemonsFromApi();
    const pokemonsDb = await getPokemonsFromDb();
    
    const allPokemons = [...pokemonsApi, ...pokemonsDb];
    //Retorno todos los pokemons
    return allPokemons;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getAllPokemons;