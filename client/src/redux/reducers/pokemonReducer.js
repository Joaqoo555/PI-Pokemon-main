import {
  GET_ALL_POKEMONS,
  SET_ACCES_FALSE,
  SET_ACCES_TRUE,
} from "../actions/index.js";

const initialState = {
  pokemons: [],
  access: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return { ...state, pokemons: payload };
    case SET_ACCES_TRUE:
      return { ...state, access: true };
    case SET_ACCES_FALSE:
      return { ...state, access: false };
    default:
      return initialState;
  }
};

export default rootReducer;
