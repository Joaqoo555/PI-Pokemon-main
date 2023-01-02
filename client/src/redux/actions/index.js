export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_ID = "GET_POKEMON_ID";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const GET_POKEMON_TYPE = "GET_POKEMON_TYPE";
export const GET_TYPES = "GET_TYPES";
export const SET_ACCES_TRUE = "SET_ACCES_TRUE";
export const SET_ACCES_FALSE = "SET_ACCES_FALSE";
export const GET_POKEMON_ORIGIN_DB = "GET_POKEMON_ORIGIN_DB";

export const getTypes = () => async (dispatch) => {
  const resolve = await fetch("http://localhost:3001/types");
  const data = await resolve.json();
  return dispatch({ type: GET_TYPES, payload: data });
};

export const getAllPokemons = () => async (dispatch) => {
  const resolve = await fetch("http://localhost:3001/pokemons");
  const data = await resolve.json();
  return dispatch({ type: GET_ALL_POKEMONS, payload: data });
};

export const getPokemonsByID = (id) => async (dispatch) => {
  const resolve = await fetch(`http://localhost:3001/pokemons/${id}`);
  const data = await resolve.json();
  return dispatch({ type: GET_POKEMON_ID, payload: data });
};

export const getPokemonByName = (name) => async (dispatch) => {
  const resolve = await fetch(`http://localhost:3001/pokemons?name=${name}`);
  const data = await resolve.json();
  return dispatch({ type: GET_POKEMON_NAME, payload: data });
};

//acces en la pagina de inicio.
export const accesTrue = () => {
  return { type: SET_ACCES_TRUE };
};

export const accesFalse = () => {
  return { type: SET_ACCES_FALSE };
};

export const getPokemonOfDb = () => async (dispatch) => {
  console.log("hola")
  const resolve = await fetch("http://localhost:3001/pokemons");
  let data = await resolve.json();

  data = data.filter((pokemon) => {
    return pokemon.is_default === false;
  });
  console.log(data)
  return dispatch({ type: GET_POKEMON_ORIGIN_DB, payload: data });
};

export const getPokemonsForTypes = (payload) => ({
  type: GET_POKEMON_TYPE,
  payload,
});
