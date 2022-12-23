const {Pokemon} = require("../db")

const getPokemonDbByName = async (name)=>{
        const pokemon = await Pokemon.findOne({ where: { name } });
        if(pokemon === null) throw new Error("Not found by Name indicate")
        return pokemon
}

module.exports = getPokemonDbByName;