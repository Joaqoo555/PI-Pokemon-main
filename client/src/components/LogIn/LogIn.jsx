import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import style from "./logIn.module.css";

const LogIn = ({ handleSubmit }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={style.log_in}
    >
      <input type="submit" value="GO!" className={style.button} />
    </form>
  );
};

export default LogIn;
