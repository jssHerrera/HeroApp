import { Routes, Route } from "react-router-dom";
import { DCPages, HeroPage, MarvelPages, SearchPage } from "../pages";
import { NavBar } from "../../ui";

export const HeroesRouters = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MarvelPages />} />
        
        <Route path="marvel" element={<MarvelPages />} />
        <Route path="dc" element={<DCPages />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="info/:heroId" element={<HeroPage />} />
      </Routes>
    </>
  );
};
