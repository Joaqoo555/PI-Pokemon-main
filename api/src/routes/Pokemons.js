const router = require("express").Router();
const getAllPokemons = require("../controllers/getAllPokemons.js");
const getPokemonByName = require("../controllers/getPokemonByName.js")



router.get("/", async (req, res) => {
  try {
    let { name } = req.query;
    if (name) {
      name = name.toLowerCase();
      const pokemon = await getPokemonByName(name);
      return res.status(200).json(pokemon);
    }
    const pokemons = await getAllPokemons();
    res.json(pokemons);
  } catch (error) {
    res.status(400).send("no funca");
  }
});

module.exports = router;
