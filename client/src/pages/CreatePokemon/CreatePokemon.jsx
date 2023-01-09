//hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Card from "../../components/Card/Card";

//helper
import validatePokemon from "../../components/helpers/postPokemonValidate";


//actions
import { createPokemon } from "../../redux/actions";

//css
import style from "./createPokemon.module.css";


const CreatePokemon = () => {

  const dispatch = useDispatch()
  const types = useSelector((state) => state.types);
  const [pokemon, setPokemon] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    image: "",
    types: [],
    is_default: false,
  });
  

  const [error, setError] = useState({});

  useEffect(() => {
    setError(validatePokemon(pokemon));
  }, [pokemon]);

  const handleOnChangeInps = ({ target }) => {
    const valueInp = target.value;
    const nameInp = target.name;

    nameInp === "name" || nameInp === "image"
      ? setPokemon({
          ...pokemon,
          [nameInp]: valueInp,
        })
      : setPokemon({
          ...pokemon,
          [nameInp]: parseInt(valueInp),
        });
  };

  const handleOnChangeCheckbox = ({ target }) => {
    
    if (target.checked) {
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, target.id],
      });
    } else if (!target.checked) {
      //Busco por id el nombre que quiero quitar
      const findIndexName = pokemon.types.indexOf(target.id)
      //actualizo el array sacando el indice que encontre
      pokemon.types.splice(findIndexName, 1);
      

      //seteo el estado local
      setPokemon({
        ...pokemon,
        types: pokemon.types,
      });
    }
  };
  
  const hanldeOnSubmit = (e)=> {
    e.preventDefault()
    if(!Object.entries(error).length){
      dispatch(createPokemon(pokemon))
      setPokemon({
          name: "",
          hp: 0,
          attack: 0,
          defense: 0,
          speed: 0,
          height: 0,
          weight: 0,
          image: "",
          types: [],
          is_default: false,
        })
    }
    e.target.reset()
  }
  return (
    <div className={style.container_create}>
      <div className={style.container_card}>
        <Card
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          attack={pokemon.attack}
        />
      </div>
      <form onSubmit={hanldeOnSubmit}>
        <div className={style.inps}>
          <input type="text" name="name" onChange={handleOnChangeInps} value={pokemon.name}/>
          <input type="text" name="image" onChange={handleOnChangeInps} value={pokemon.image}/>
          <input type="number" name="hp" onChange={handleOnChangeInps} value={pokemon.hp}/>
          <input type="number" name="attack" onChange={handleOnChangeInps} value={pokemon.attack}/>
          <input type="number" name="defense" onChange={handleOnChangeInps} value={pokemon.defense}/>
          <input type="number" name="speed" onChange={handleOnChangeInps} value={pokemon.speed}/>
          <input type="number" name="height" onChange={handleOnChangeInps} value={pokemon.height}/>
          <input type="number" name="weight" onChange={handleOnChangeInps} value={pokemon.weight}/>
        </div>
        <div className={style.types}>
          {types?.map((t) => (
            <section key={t.id}>
              <label htmlFor={t.id}>{t.name}</label>
              <input
                className={style.check}
                type="checkbox"
                id={t.id}
                onChange={handleOnChangeCheckbox}
                name={t.name}
              />
            </section>
          ))}
        </div>
        <input type="submit" value="Crear Pokemon" />
      </form>
    </div>
  );
};

export default CreatePokemon;
