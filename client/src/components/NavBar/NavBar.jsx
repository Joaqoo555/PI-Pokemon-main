import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { accesFalse } from "../../redux/actions";
import style from "./navBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(accesFalse());
    navigate("/");
  };

  const [bar, setbar] = useState(false);

  return (
    <nav className={style.nav_bar}>
      {/* Open slider bar */}
      {!bar && <GiHamburgerMenu onClick={() => setbar(true)} className={style.open}/>}

      {/* slider Bar */}
      {bar && (
        <div className={style.slide_bar}>
          <AiOutlineClose onClick={() => setbar(false)} className={style.close}/>
          <button className={style.create_pokemon}><Link to="/home/create" className={style.link}>Crear Pokemon</Link></button>
          <button className={style.home}><Link to="/home" className={style.link}>Home</Link></button>

          <button onClick={() => logOut()} className={style.button_exit}>Exit</button>
        </div>
      )}
      <section>
      <Outlet>
        
        </Outlet>
      </section>
    </nav>
  );
};

export default NavBar;
