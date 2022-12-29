import NavBar from "../NavBar/NavBar.jsx";
import style from "./searchBar.module.css";


const SearchBar = () => {
  return (
    <header className={style.search_bar}>
      
      <NavBar />
      <input type="text" placeholder="Search for Name" className={style.search}/>
    </header>
  )
}

export default SearchBar
