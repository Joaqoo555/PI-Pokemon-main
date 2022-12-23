const router = require("express").Router();
const createPokemon = require("../controllers/createPokemon.js")

router.post("/", async (req, res) => {
    try {
        const pokemon = req.body;
        const newPokemon = await createPokemon(pokemon)
        
        res.status(201).send(newPokemon)
    } catch (error) {
        res.status(404).send(error.message)
    }

});
module.exports = router;
