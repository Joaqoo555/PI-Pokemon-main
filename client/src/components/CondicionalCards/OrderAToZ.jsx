import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const OrderAToZ = ({ pagina, porPagina }) => {
  const { pokemons, order } = useSelector((state) => state);
  const { orderHiTolow, orderLowToHi } = order;
  //ORDEN DE LA A - Z
  return (
    <>
      {!orderHiTolow && !orderLowToHi
        ? pokemons
            //paginado
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            //ORDEN DE LA A - Z

            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              // a must be equal to b
              return 0;
            })
            .map((p, i) => (
              //renderizado de cards
              <Card
                key={i}
                name={p.name}
                image={p.image}
                types={p.types}
                id={p.id}
                attack={p.attack}
              />
            ))
        : orderHiTolow
        ? pokemons
            //paginado
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .sort((a, b) => a.attack - b.attack)
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              // a must be equal to b
              return 0;
            })
            .map((p, i) => (
              //renderizado de cards
              <Card
                key={i}
                name={p.name}
                image={p.image}
                types={p.types}
                id={p.id}
                attack={p.attack}
              />
            ))
        : orderLowToHi &&
          pokemons
            //paginado
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .sort((a, b) => -a.attack + b.attack)
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              // a must be equal to b
              return 0;
            })
            .map((p, i) => (
              //renderizado de cards
              <Card
                key={i}
                name={p.name}
                image={p.image}
                types={p.types}
                id={p.id}
                attack={p.attack}
              />
            ))}
    </>
  );
};

export default OrderAToZ;
