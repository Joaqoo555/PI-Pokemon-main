
import style from "./filters.module.css"
const Filters = () => {

  return (
    <div className={style.container}>
      {/* hay un problema con la propiedad default value */}
      <select name="Type Pokeon" id="" className={style.s1} >
      <option value="s" selected disabled hidden>Tipos</option>
        <option value="s">s</option>
        <option value="s">s</option>
        <option value="s">s</option>
      </select>
      <select name="s" id="" className={style.s2}>
      <option value="s" selected disabled hidden>Origen</option>
        <option value="s">s</option>
        <option value="s">s</option>
        <option value="s">s</option>
      </select>

    
    <select name="s" id="" className={style.s3}>
    <option value="s" selected disabled hidden>Ataque</option>
        <option value="s">s</option>
        <option value="s">s</option>
        <option value="s">s</option>
      </select>
      <select name="s" id="" className={style.s4}>
      <option value="s" selected disabled hidden>Orden</option>
        <option value="s">s</option>
        <option value="s">s</option>
        <option value="s">s</option>
      </select>

    </div>
  )
}

export default Filters
