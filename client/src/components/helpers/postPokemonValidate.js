const validatePokemon = ({
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  image,
  types,
  is_default,
}) => {
  const error = {};
  const controlName = /[\^$.¡*+?=¿%&!:|\\/()[\]{}1234567890¬"'#;-@¨]/;
  const controlInpsNumber = /[\^$.¡*+?=¿%&!:|\\/()[\]{}¬"'#;-@¨]/;
  if (
    typeof name !== "string" ||
    name.length <= 1 ||
    name.length >= 20 ||
    controlName.test(name)
  )
    error.name = "Los datos ingresados son incorrectos";

  if (isNaN(hp) || controlInpsNumber.test(hp) || hp === 0)
    error.hp = "Mayor a 1 menor que 999";
  if (isNaN(attack) || controlInpsNumber.test(attack) || attack === 0)
    error.attack = "Mayor a 1 menor que 999";
  if (isNaN(defense) || controlInpsNumber.test(defense) || defense === 0)
    error.defense = "Mayor a 1 menor que 999";
  if (isNaN(height) || controlInpsNumber.test(height) || height === 0)
    error.height = "Mayor a 1 menor que 999";
  if (isNaN(speed) || controlInpsNumber.test(speed) || speed === 0)
    error.hp = "Mayor a 1 menor que 999";
  if (isNaN(weight) || controlInpsNumber.test(weight) || weight === 0)
    error.weight = "Mayor a 1 menor que 999";
  if (typeof types !== "object" || types.length <= 0 || types.length >= 4)
    error.types = "Ingresar 1 o hasta 3 tipos.";
  return error;
};
export default validatePokemon;