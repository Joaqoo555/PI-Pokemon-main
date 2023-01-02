import { useDispatch, useSelector } from "react-redux";
import { getPokemonsForTypes, getTypes } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { getAllPokemons, getPokemonOfDb } from "../../redux/actions/index";
import style from "./filters.module.css";



const Filters = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const foundPokemons = useSelector((state) => state.foundPokemons);
  const [options, setOptions] = useState({
    types: "",
    is_default: undefined,
  });

  //typos de pokemons

  //Resetea el option default de pokemons si no encuentra ninguno con ese nombre
  const resetPokemonsTypes = () => {
    setOptions({ ...options, types: "" });
    dispatch(getAllPokemons());
  };

  //Obtiene los typos segun donde se pare el selector el ususario, aparte despacha el valor de ese selector para traer solo los de ese tipo.
  const handleOnChangeTypes = ({ target }) => {
    setOptions({ ...options, types: target.value });
    dispatch(getPokemonsForTypes(target.value));
  };

  //Origen de pokemons
  // const resetPokemonsOrigin = () => {
  //   setOptions({...options, is_default: true})
  // }

  const handleOnChangeOrigin = ({target})=> {
    
    if(JSON.parse(target.value) === false){
      dispatch(getPokemonOfDb())
    }
      else if(JSON.parse(target.value) === true){
        dispatch(getAllPokemons())
      }
    
  }
  


  //Obtener y renderizar los tipos de pokemons desde la db
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  //resetear filtrado de los tipos de pokemons
  useEffect(() => {
    resetPokemonsTypes();
  }, [foundPokemons]);

  return (
    <form className={style.container}>
      {/* first select */}
      <select
        name="types"
        className={style.s1}
        onChange={handleOnChangeTypes}
        value={options.types}
      >
        <option value="" key="default" hidden defaultValue={"Tipos"}>
          Tipos
        </option>
        {types?.map((type) => (
          <option value={type.name} key={type.id}>
            {type.name}
          </option>
        ))}
      </select>

      {/* seundo select */}
      <select name="origen" className={style.s2} value={options.is_default} onChange={handleOnChangeOrigin}>
        <option value="" key="default" hidden defaultValue={"Origen"}>
          Origen
        </option>
          <option value={true}>Pokemons por default</option>
          <option value={false}>Pokemons por de DB</option>

      </select>

      {/* tercer select */}
      <select name="types" className={style.s3}>
        <option value="" key="default" hidden defaultValue={"Tipos"}>
          Ataque
        </option>
        <option value=""></option>
      </select>

      {/* cuarto select */}

      <select name="types" className={style.s4}>
        <option value="" key="default" hidden defaultValue={"Tipos"}>
          Orden Alfabetico
        </option>
      </select>
    </form>
  );
};

export default Filters;
