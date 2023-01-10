//Componentes
import Paginado from "../Paginado/Paginado";
import OrderHightToLow from "../CondicionalCards/OrderHightToLow";
import ConsdicionalCards from "../CondicionalCards/ConsdicionalCards";
import OrderLowToHight from "../CondicionalCards/OrderLowToHight";
import OrderAToZ from "../CondicionalCards/OrderAToZ";

//layouts
import LoadingPokemons from "../../Layouts/LoadingPokemons/LoadingPokemons";

//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//Css, img
import style from "./cards.module.css";
import NotFoundPokemons from "../../Layouts/NotFoundPokemons/NotFoundPokemons";

//actions
import {
  order_A_Z,
  order_Z_A,
  orederHigth,
  orederlow,
  resetOrederAlf,
} from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();

  //pokemons api y db
  const { pokemons, order, orderAlf } = useSelector((state) => state);
  console.log(order, orderAlf);
  console.log(pokemons);
  //pokemons encontrados
  const foundPokemons = useSelector((state) => state.foundPokemons);

  //Paginado
  // const [pagina, setPagina] = useState(1);
  const pagina = useSelector((state) => state.pages);
  const porPagina = 12;
  const maximo = pokemons.length / porPagina;

  return (
    <div className={style.container_cards}>
      <div className={style.container_buttons}>
        <button
          onClick={() => {
            dispatch(orederHigth());
          }}
          className={style.button}
        >
          Ordenar de menor a mayor ataque
        </button>
        <button
          onClick={() => {
            dispatch(orederlow());
          }}
          className={style.button}
        >
          Ordenar de mayor a menor ataque
        </button>
      </div>
      <div className={style.container_buttons}>
        <button onClick={() => dispatch(order_A_Z())} className={style.button}>
          Ordenar de la a-z
        </button>
        <button onClick={() => dispatch(order_Z_A())} className={style.button}>
          Ordenar de la z-a
        </button>
      </div>
      <Paginado maximo={maximo} />
      <div className={style.cards}>
        {/* valido que no haya nada en los dos estados independientes de pokemons */}
        {
          // Valido que se hayan encontrado los pokemons filtrados, si no se encuentran van directo al not found
          foundPokemons ? (
            //espero que mi array de pokemons se establezca, mientras carga hay una pantalla de carga
            pokemons.length > 0 ? (
              !order.orderHiTolow &&
              !order.orderLowToHi ||
              !orderAlf.a_z &&
              !orderAlf.z_a ? (
                <ConsdicionalCards pagina={pagina} porPagina={porPagina} />
              ) : order.orderHiTolow ? (
                <OrderHightToLow pagina={pagina} porPagina={porPagina} />
              ) : order.orderLowToHi ? (
                <OrderLowToHight pagina={pagina} porPagina={porPagina} />
              ) : orderAlf.a_z ? (
                <OrderAToZ pagina={pagina} porPagina={porPagina}/>
              ) : (
                orderAlf.z_a && console.log("gola")
              )
            ) : (
              //GIF de carga de pokemons
              <LoadingPokemons />
            )
          ) : (
            //imagen de not found de pokemons
            <NotFoundPokemons />
          )
        }
      </div>
    </div>
  );
};

export default Cards;
