import { Link } from "react-router-dom"
import style from "./card.module.css"

const Card = ({name, image, types, id, attack}) => {

  return (
    <div className={style.card}>
        <Link to={`/home/detail/${id}`} className={style.link}>
        <img src={image} alt={name} className={style.img}/>
        <h3 className={style.text}>{name}</h3>
        <h4 className={style.text}>Ataque: {attack}</h4>
        <div className={style.container_types}>{types?.map((t, i) =><span key={i} className={style.type}>{t}</span>)}</div>
        </Link>
    </div>
  )
}

export default Card
