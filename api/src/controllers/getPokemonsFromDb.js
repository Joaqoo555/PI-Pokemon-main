const { Pokemon, Type } = require("../db.js");

const getPokemonsFromDb = async () => {
  try {
    //BUsco todos los pokemons en la Db
    const infoDb = await Pokemon.findAll({
      include: {
        //Tabla
        attributes: ["name"],
        model: Type,
        //Tabla intermedia
        through: {
          attributes: ["PokemonId","TypeId"],
        },
      },
    });
    return infoDb;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getPokemonsFromDb;
