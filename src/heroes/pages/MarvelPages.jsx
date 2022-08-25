import {HeroList} from "../components";
import './styles.css'
export const MarvelPages = () => {

  return (
    <section className="card container section ">
      <h2 className="section__title">Marvel</h2>
      <HeroList tipo="Marvel Comics" />
    </section>
  );
};
