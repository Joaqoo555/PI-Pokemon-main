const getDetailPokemonDb = require("./getDetailPokemonDb.js");
const createPokemon = require("../postPokemons/createPokemon");
const getPokemonDbByName = require("../getPokemonsByName/getPokemonDbByName");



describe("Obtener un pokemon Especifico por medio del ID pasado como parametro desde la Base de datos", () => {
  let pokemonTest;
let idThrow = 23;
  beforeAll(async () => {
    const newPokemon = {
      name: "pokemonTest",
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      height: 7,
      weight: 69,
      image: "",
      types: [2, 1],
    };
    await createPokemon(newPokemon);
    const pokemonByName = await getPokemonDbByName("pokemonTest")
    pokemonTest = await getDetailPokemonDb(pokemonByName.id);

  });
  it("Debe devolver un objeto ", () => {
    expect(pokemonTest).toBeInstanceOf(Object);
  });

  //Errores
  it("Si no se ingresa un numero debe de arrojar un error", () => {
    expect(
      async () => await getDetailPokemonDb().toThrow("No se ingreso un ID")
    );
  });
  it('Si se ingresa un ID no valido arroja un error notFound', () => {
    expect(async ()=> getDetailPokemonDb(idThrow).toThrow("No se encontro el pokemon"))
  });
});
