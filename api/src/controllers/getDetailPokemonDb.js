const { Pokemon, Type } = require("../db");
const getDetailPokemonDb = async (id) => {
  try {
    if (!id) throw new Error("No se ingreso un ID");
    //Busco un pokemon por medio de su UUIDv4
    const pokeDb = await Pokemon.findOne({
      where: { id },
      include: {
        model: Type,
        through: {
          attributes: [],
        },
      },
    });
    if (!pokeDb) throw new Error("No se encontro el pokemon");
    //Retorno el pokemon si es q lo encuentra
    return pokeDb;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getDetailPokemonDb;
