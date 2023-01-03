const router = require("express").Router();
const getPokemonsFromDb = require("../controllers/getPokemonsFromDb.js");

router.get("/dataBase", async (req, res) => {
  try {
    const pokemons = await getPokemonsFromDb();
    res.json(pokemons);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
