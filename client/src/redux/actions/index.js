const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
const SET_ACCES_TRUE = "SET_ACCES_TRUE";
const SET_ACCES_FALSE = "SET_ACCES_FALSE";

export { GET_ALL_POKEMONS, SET_ACCES_TRUE, SET_ACCES_FALSE };

export const getAllPokemons = () => async (dispatch) => {
  const resolve = await fetch("http://localhost:3001/pokemons");
  const data = await resolve.json();
  return dispatch({ type: GET_ALL_POKEMONS, payload: data });
};
//acces en la pagina de inicio.
export const accesTrue = ()=> {
    return { type: SET_ACCES_TRUE}
}

export const accesFalse = ()=> {
    return { type: SET_ACCES_FALSE}
}