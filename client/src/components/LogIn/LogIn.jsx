import style from "./logIn.module.css";

const LogIn = ({ handleSubmit }) => {
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
