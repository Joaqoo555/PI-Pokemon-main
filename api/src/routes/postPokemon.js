const router = require("express").Router();
const createPokemon = require("../controllers/createPokemon.js")

router.post("/", async (req, res) => {
    try {
        const pokemon = req.body;
        await createPokemon(pokemon)
        
        res.status(201).send("Pokemon creado con exito")
    } catch (error) {
        res.status(400).json(error)
    }

});
module.exports = router;
