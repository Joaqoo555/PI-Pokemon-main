const getPokemonsFromApi = require("./getPokemonsFromApi.js");
const getPokemonsFromDb = require("./getPokemonsFromDb");

const getAllPokemons = async () => {
  try {
    //LLamo a los pokemons de la Db y de la API
    const pokemonsApi = await getPokemonsFromApi();
    const pokemonsDb = await getPokemonsFromDb();

    //retorno solo los de la Db si no se hizo request a la API
    if(!pokemonsApi.length)
        return pokemonsDb
    //retorno solo los de la API si no se creo ningun pokemon en la Db
    if(!pokemonsDb.length)
        return pokemonsApi
    //Si estan en los dos lados, los concateno 
    const allPokemons = [...pokemonsApi, ...pokemonsDb];
    //Retorno todos los pokemons
    console.log(allPokemons)
    return allPokemons;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getAllPokemons;