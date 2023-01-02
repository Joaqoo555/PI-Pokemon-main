//Componentes
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

//reducers
import { getAllPokemons } from "../../redux/actions/index";

//Css, img
import style from "./cards.module.css";
import gifPika from "../../img/pikachu-running.gif";
import pikaError from "../../img/notFoundPika.png";

const Cards = () => {
  //pokemons api y db
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  // renderizado de pokemons
  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);


  //pokemons encontrados
  const foundPokemons = useSelector((state) => state.foundPokemons);

  //Paginado
  const [pagina, setPagina] = useState(1);
  const porPagina = 12
  const maximo = pokemons.length / porPagina;

  return (
    <div>
      <div className={style.cards}>
        {foundPokemons ? (
          pokemons.length > 0 ? (
            pokemons
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
              .map((p, i) => <Card key={i} name={p.name} image={p.image} />)
          ) : (
            <figure className={style.figure}>
              <img src={gifPika} alt="Cargando" className={style.img} />
              <figcaption className={style.fig_cap}>
                Cargando Pokemons ...
              </figcaption>
            </figure>
          )
        ) : (
          <figure className={style.figure}>
            <img src={pikaError} alt="Cargando" className={style.img} />
            <figcaption className={style.fig_cap}>
              Pokemons no enocntrados.
            </figcaption>
          </figure>
        )}
      </div>
      <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};

export default Cards;
