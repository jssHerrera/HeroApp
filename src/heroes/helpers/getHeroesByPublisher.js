import { heroes } from "../data/heroes";

 export const getHeroes = (tipo) => {
  const validar  = ["DC Comics", "Marvel Comics"]
  if(!validar.includes(tipo)){
    throw new Error(`${tipo} no es valido` )
  }
   return heroes.filter((elem) => elem.publisher === tipo);
};
