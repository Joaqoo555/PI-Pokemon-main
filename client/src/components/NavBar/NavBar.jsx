import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { accesFalse } from "../../redux/actions";
import style from "./navBar.module.css";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(accesFalse());
    navigate("/");
  };

  return (
    <nav className={style.nav_bar}>


      <button onClick={() => logOut()}>Exit</button>
      
      
    </nav>
  );
};

export default NavBar;
