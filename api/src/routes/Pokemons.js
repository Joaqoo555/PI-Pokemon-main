const router = require("express").Router();
const getAllPokemons = require("../controllers/getAllPokemons.js");
const getPokemonByName = require("../controllers/getPokemonByName.js")



router.get("/", async (req, res, next) => {
  try {

    let { name } = req.query;
    if (name) {
      name = name.toLowerCase();
      const pokemon = await getPokemonByName(name);
      return res.status(200).json(pokemon);
    }
    const pokemons = await getAllPokemons();
    return res.json(pokemons);
  } catch (error) {
    res.status(404).send(error.message)
  }
});

module.exports = router;
