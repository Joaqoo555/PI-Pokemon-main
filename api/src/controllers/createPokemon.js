const { Pokemon, Type } = require("../db");

const createPokemon = async ({
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types
}) => {
  if (!name || !hp || !attack || !defense || !speed || !height || !weight || !types.length)
    throw new Error("No se ingresaron los datos necesarios");
  const newPokemon = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  });

  await newPokemon.addType(types)

  return newPokemon
};
module.exports = createPokemon;
