import React from 'react'
import Card from '../Card/Card'
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions/index";
import { useEffect } from "react";
import style from "./cards.module.css"
const Cards = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);
  const pokemons = useSelector((state) => state.pokemons);
  console.log(pokemons);
  return (
    <div className={style.cards}>
      {pokemons.map((p, i) => <Card key={i}
      name={p.name}
      image={p.image}
      />)}
    </div>
  )
}

export default Cards
