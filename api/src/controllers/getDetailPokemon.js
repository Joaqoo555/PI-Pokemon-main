const getDetailPokemonAPI = require("../controllers/getDetailPokemonAPI.js");
const getDetailPokemonDb = require("../controllers/getDetailPokemonDb.js");

const getDetailPokemon = async (id) => {
  console.log(id)
  try {
  //verifico que el ID sea un numero o un string 
  if (id.includes("-")) {
    //si es string lo busca en las DB
    const pokeDb = await getDetailPokemonDb(id);
    return pokeDb;
  }
  //Si es un numero o un numero como string, lo busca en la api
  const pokeApi = await getDetailPokemonAPI(id);
  return pokeApi;
  } catch (error){
    throw new Error(error.message)
  }
};
module.exports = getDetailPokemon;
