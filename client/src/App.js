import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn.jsx";
import Home from "./Home/Home.jsx";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { useDispatch, useSelector } from "react-redux";
import { accesTrue } from "./redux/actions/index.js";


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const access = useSelector(state => state.access)
  const handleSumit = () => {
    dispatch(accesTrue())
    navigate("/home");
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/" index element={<LogIn handleSubmit={handleSumit} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="create" element={<CreatePokemon />} />
      </Routes>
    </>
  );
}

export default App;
