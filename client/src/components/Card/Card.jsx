import { Link } from "react-router-dom"
import style from "./card.module.css"

const Card = ({name, image, types, id}) => {

  return (
    <div className={style.card}>
        <Link to={`/home/detail/${id}`}>
        <img src={image} alt={name} className={style.img}/>
        <h3>{name}</h3>
        <div className={style.container_types}>{types?.map((t, i) =><span key={i} className={style.type}>{t}</span>)}</div>
        </Link>
    </div>
  )
}

export default Card
