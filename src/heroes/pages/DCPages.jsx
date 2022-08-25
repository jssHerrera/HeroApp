import {HeroList} from "../components";
import './styles.css'
export const DCPages = () => {
  return (
    <section className='card container section '>
      <h2 className='section__title'>Dc</h2>
      <HeroList tipo='DC Comics' />
    </section>
  )
};
