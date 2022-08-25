import React from "react";
import { useMemo } from "react";
import { getHeroes } from "../helpers/getHeroesByPublisher";
import {HeroCard} from "./HeroCard";

export const HeroList = ({tipo}) => {
  const hero = useMemo(()=>getHeroes(tipo), [tipo] )

  return (
    <div className="card__container animate__animated animate__fadeIn">
      {hero.map((elem) => (
        <HeroCard key={elem.id} elem={elem} />
      ))}
    </div>
  );
};


