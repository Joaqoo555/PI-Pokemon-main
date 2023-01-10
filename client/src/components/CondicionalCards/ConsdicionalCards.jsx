import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const ConsdicionalCards = ({ pagina, porPagina }) => {
  const {pokemons} = useSelector((state) => state);
  return (
    <>
      {
      pokemons
        //paginado
        .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
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

        }
    </>
  );
};

export default ConsdicionalCards;
