import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemonsByID } from "../../redux/actions";
import { useParams } from "react-router-dom";
import style from "./detail.module.css"
const Detail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemonsByID(id))
  }, [id, dispatch]);
  const pokemonId = useSelector(state=> state.pokemonId)
  return (
    <section className={style.pokemon}>
     <figure>
        <img src={pokemonId.image} alt={pokemonId.name} />
     </figure>
      <h2>{pokemonId.name}</h2>
      <article className={style.types}>
        {pokemonId.types?.map((t , i)=> <span key={i}> {t} </span>)}
      </article>
      <article>
        <div>
          <p>{pokemonId.weight} Kg</p>
          <span>weight</span>
        </div>
        <div>
        <p>{pokemonId.height} M</p>
          <span>height</span>
        </div>
        </article>
        <article>
          <h3>base Stats</h3>
          <main>
          <label htmlFor="hp">HP</label>
          <span>{pokemonId.hp}/200</span>
          <progress id="hp" max="200" value={pokemonId.hp}></progress>

          <label htmlFor="attack">attack</label>
          <span>{pokemonId.attack}/200</span>
          <progress id="attack" max="200" value={pokemonId.attack}></progress>

          <label htmlFor="defense">defense</label>
          <span>{pokemonId.defense}/200</span>
          <progress id="defense" max="200" value={pokemonId.defense}></progress>

          <label htmlFor="speed">speed</label>
          <span>{pokemonId.speed}/200</span>
          <progress id="speed" max="200" value={pokemonId.speed}></progress>

          </main>
        </article>
    </section>
  );
};

export default Detail;
