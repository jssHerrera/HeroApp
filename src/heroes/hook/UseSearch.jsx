import queryString from "query-string";
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSearchHero } from "../helpers";

export const UseSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q='' } = queryString.parse(location.search);
  const [busqueda, setBusqueda] = useState({
    name: q,
  });
  const { name } = busqueda;
  const data = getSearchHero(q);

  // ----------------------------------------
  const showSearch = q.length === 0;
  const showError = q.length > 0 && data.length == 0;

  // ----------------------------------------
  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // ----------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${name}`);
  };

  return {
    busqueda,
    q,
    showSearch,
    showError,
    data,
    handleChange,
    handleSubmit,
  };
};
