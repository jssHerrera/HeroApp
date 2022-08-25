import { Link } from "react-router-dom";
import "./hero.css";
export const HeroCard = ({ elem }) => {
  const { id, superhero, publisher} =
    elem;

  const imgPhat =`/img/${id}.jpg`
  return (
    <div className="card__list animate__animated animate__fadeIn">
      <span className="card__tag">{publisher}</span>
      <img src={imgPhat} alt="" className="card__img " />
      <Link to={`/info/${id}`} className="card__description">
        <span className="card__name">{superhero}</span>
      </Link>
    </div>
  );
};
