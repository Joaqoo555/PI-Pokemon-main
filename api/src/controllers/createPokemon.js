const { Pokemon, Type } = require("../db");
const getPokemonAPIByName = require("./getPokemonAPIByName.js")
const createPokemon = async ({
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
  is_default = false
}) => {
  if (
    !name ||
    !hp ||
    !attack ||
    !defense ||
    !speed ||
    !height ||
    !weight ||
    !types.length
  )
    throw new Error("No se ingresaron los datos necesarios");
    //el nombre del pokemon creado lo buscamos para q no se repita si es que esta en la API
    const repeated = await getPokemonAPIByName(name)

    if(repeated.name) throw new Error("Nombre de pokemon repetido")

    const existTypes = await Type.findAll()

    if(!existTypes.length) throw new Error("No se puede crear pokemon, porque no estan los tipos de pokemons cargados")
    const newPokemon = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    is_default
  });
                        //[1,2,3]
  await newPokemon.addType(types);

  return newPokemon;
};
module.exports = createPokemon;
