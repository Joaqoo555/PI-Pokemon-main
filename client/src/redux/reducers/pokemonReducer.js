import {
  GET_TYPES,
  GET_ALL_POKEMONS,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  SET_ACCES_FALSE,
  SET_ACCES_TRUE,
  GET_POKEMON_TYPE,
  GET_POKEMON_ORIGIN_DB,
} from "../actions/index.js";

const initialState = {
  foundPokemons: true,
  pokemons: [],
  access: false,
  pokemonId: {},
  pokemonName: {},
  types: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return { ...state, pokemons: payload, foundPokemons: true };

    case GET_TYPES:
      return { ...state, types: payload };

    case GET_POKEMON_TYPE:
      state.pokemons = state.pokemons.filter((pokemon) => {
        return pokemon.types.some((type) => type === payload);
      });
      if (state.pokemons.length === 0)
        return { ...state, foundPokemons: false };
      return { ...state, ...state.pokemons };

    case GET_POKEMON_NAME:
      return { ...state, pokemonName: payload };

    case GET_POKEMON_ID:
      return { ...state, pokemonId: payload };
    //--------------------------------------------------------

    case SET_ACCES_TRUE:
      return { ...state, access: true };
    case SET_ACCES_FALSE:
      return { ...state, access: false };

    case GET_POKEMON_ORIGIN_DB:
      return { ...state, pokemons: payload };

    default:
      return initialState;
  }
};
export default rootReducer;
