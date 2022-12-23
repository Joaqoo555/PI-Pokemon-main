const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllPokemons = require("./Pokemons.js");
const getPokemonById = require("./getPokemonById.js");
const postPokemon = require("./postPokemon.js")
const Types = require("./Types.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//Obtenemos todos los pokemons => la ruta solo trae 20
router.use("/pokemons", [
    getAllPokemons, 
    getPokemonById,
    postPokemon,
]);
router.use('/types', Types)

module.exports = router;
