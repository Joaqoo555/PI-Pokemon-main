import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const ConsdicionalCards = ({ pagina, porPagina }) => {
  const {pokemons, orderAlf} = useSelector((state) => state);
  const {a_z, z_a} = orderAlf
  return (
    <>
      {
        (!a_z && !z_a) ? 
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
          />
        ))
        : a_z ? 
        pokemons
        //paginado
        .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
        .sort((a, b) => a.attack - b.attack)
        .sort( (a, b) => {
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
          />
        ))
        : z_a && 
        pokemons
        //paginado
        .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
        .sort((a, b) => a.attack - b.attack)
        .sort( (a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
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
          />
        ))
        }
    </>
  );
};

export default ConsdicionalCards;
