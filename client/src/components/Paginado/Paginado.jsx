import React from "react";
import style from "./paginado.module.css";
import { useState } from "react";



const Paginado = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const prevPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const handlerOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };
  const handlerOnChange = ({ target }) => {
    setInput(target.value);
  };
  return (
    <div className={style.container}>
      <button
        disabled={pagina === 1 || pagina < 1}
        onClick={prevPage}
        className={style.btn}
      >
      Prev
      </button>

      <input
        type="text"
        value={input}
        autoComplete="off"
        onKeyDown={(e) => handlerOnKeyDown(e)}
        onChange={(e) => handlerOnChange(e)}
        maxLength="1"
        className={style.inp}
      />
      <p className={style.p}>de {Math.ceil(maximo)}</p>
      <button
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
        className={style.btn}
      >
        Next
      </button>
    </div>
  );
};

export default Paginado;
