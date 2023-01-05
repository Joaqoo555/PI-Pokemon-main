import { useDispatch, useSelector } from "react-redux";
import { getPokemonsForTypes, getTypes, orederOriginal, resetOrederAlf } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { getAllPokemons, getPokemonOfDb } from "../../redux/actions/index";
import style from "./filters.module.css";



const Filters = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);


  const [options, setOptions] = useState({
    types: "",
    is_default: "",
  });

  //typos de pokemons

  //Resetea el option default de pokemons si no encuentra ninguno con ese nombre
  const resetPokemonsTypes = () => {
    dispatch(getAllPokemons())
    setOptions({ ...options, types: "", is_default: ""});
    dispatch(orederOriginal())
    dispatch(resetOrederAlf())
  };

  //Obtiene los typos segun donde se pare el selector el ususario, aparte despacha el valor de ese selector para traer solo los de ese tipo.
  const handleOnChangeTypes = ({ target }) => {
    setOptions({ ...options, types: target.value });
    dispatch(getPokemonsForTypes(target.value));
  };

  const handleOnChangeOrigin = ({target})=> {
    
    if(JSON.parse(target.value) === false){
      dispatch(getPokemonOfDb())
      setOptions({ types: "" });
    }
      else if(JSON.parse(target.value) === true){
        dispatch(getAllPokemons())
        setOptions({ types: "" });
      }
    
  }
  
  //Obtener y renderizar los tipos de pokemons desde la db y todos los pokemons
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={style.container_filters}>
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
          <option value="" hidden >Creados o Fefault</option>
          <option value={true}>Pokemons por Default</option>
          <option value={false}>Pokemons por de DB</option>

      </select>
    </form>
      <button className={style.reset_pokemons} onClick={resetPokemonsTypes}>Resetear Filtros</button>
        
    </div>
    
  );
};

export default Filters;
