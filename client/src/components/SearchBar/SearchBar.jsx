import NavBar from "../NavBar/NavBar.jsx";
import style from "./searchBar.module.css";

import { BiSearchAlt } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";

import { getPokemonByName, getPokemonsByID } from "../../redux/actions/index";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const pokemonId = useSelector((state) => state.pokemonId);
  const pokemonName = useSelector((state) => state.pokemonName);
  
  const [inps, setInps] = useState(false);

  const [search, setSearch] = useState({
    name: "",
    id: "",
  });
  const handlerOnChange = ({ target }) => {
    const valueInp = target.value;
    const nameInp = target.name;

    setSearch({
      ...search,
      [nameInp]: valueInp,
    });
  };

  const handlerOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (search.name) {
        dispatch(getPokemonByName(search.name))
        setSearch((search)=> search.name = "")
      } else {
        dispatch(getPokemonsByID(parseInt(search.id)));
        setSearch((search)=> search.id = "")
      }
    }
  };

  return (
    <header className={style.search_bar}>
      <NavBar />
      {!inps && (
        <BiSearchAlt
          onClick={() => setInps(true)}
          className={`${style.search} ${style.icon}`}
        />
      )}

      {inps && (
        <div className={style.search_open}>
          <CgCloseR
            onClick={() => setInps(false)}
            className={`${style.close} ${style.icon}`}
          />
          <BiSearchAlt className={`${style.icon} ${style.find}`} />
          <input
            type="text"
            name="name"
            placeholder="Search for Name"
            className={`${style.search_name} ${style.input}`}
            onChange={handlerOnChange}
            
            autoComplete="off"
            onKeyDown={handlerOnKeyDown}
            
          />
          <input
            type="text"
            name="id"
            placeholder="Search for Id"
            className={`${style.search_id} ${style.input}`}
            onChange={handlerOnChange}
            
            autoComplete="off"
            onKeyDown={handlerOnKeyDown}
            
          />
        </div>
      )}
    </header>
  );
};

export default SearchBar;
