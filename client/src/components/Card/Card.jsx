import style from "./card.module.css"

const Card = ({name, image}) => {

  return (
    <div className={style.card}>
        <img src={image} alt={name} className={style.img}/>
        <h3>{name}</h3>
    </div>
  )
}

export default Card
