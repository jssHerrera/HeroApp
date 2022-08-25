import { heroes } from "../data/heroes";

export const getHeroById = (id) =>{
  return heroes.find(elem => elem.id === id)
}
