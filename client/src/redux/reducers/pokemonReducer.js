import {
  GET_TYPES,
  GET_ALL_POKEMONS,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  SET_ACCES_FALSE,
  SET_ACCES_TRUE,
  GET_POKEMON_TYPE,
  GET_POKEMON_ORIGIN_DB,
  ORDER_LOW,
  ORDER_HIGHT,
  ORDER_ORIGINAL,
  ORDER_ALF_A_TO_Z,
  ORDER_ALF_Z_TO_A,
  ORDER_ALF_DEFAULT,
} from "../actions/index.js";

const initialState = {
  foundPokemons: true,
  pokemons: [],
  access: false,
  pokemonId: {},
  types: [],
  order: {
    orderHiTolow: false,
    orderLowToHi: false,
  },
  orderAlf: {
    a_z: false,
    z_a: false
  }
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
      return { ...state, pokemons: state.pokemons };

    case GET_POKEMON_NAME:
      return { ...state, pokemons: payload };

    case GET_POKEMON_ID:
      return { ...state, pokemonId: payload };

    //--------------------------------------------------------

    case SET_ACCES_TRUE:
      return { ...state, access: true };
    case SET_ACCES_FALSE:
      return { ...state, access: false };

    case GET_POKEMON_ORIGIN_DB:
      return { ...state, pokemons: payload };

      //Ordenamiento de pokemons para manejar renderizados condicionales en cards
      case ORDER_LOW: 
      return {...state, order: {
        orderHiTolow: false,
        orderLowToHi: true,
      }}
      case ORDER_HIGHT: 
      return {...state, order: {
        orderHiTolow: true,
        orderLowToHi: false,
      }}
      case ORDER_ORIGINAL: 
      return {...state, order: {
        orderHiTolow: false,
        orderLowToHi: false,
      }}

      case ORDER_ALF_A_TO_Z:
        return { ...state, orderAlf: {
          a_z: true,
          z_a: false,
        } }
      case ORDER_ALF_Z_TO_A:
        return { ...state, orderAlf: {
          a_z: false,
          z_a: true,
        } }
      case ORDER_ALF_DEFAULT:
        return { ...state, orderAlf: {
          a_z: false,
          z_a: false,
        } }

    default:
      return initialState;
  }
};
export default rootReducer;
