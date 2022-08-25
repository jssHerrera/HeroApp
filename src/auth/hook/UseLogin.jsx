import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "./UseAuthContext";

export const UseLogin = (ini = {}) => {
  const [error, setError] = useState(false);
  const [busqueda, setBusqueda] = useState(ini);

  const navigate = useNavigate();
  const { login } = UseAuthContext();

  // -------------------------------------
  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

// --------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.name.trim() === "" || busqueda.email.trim() === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }
    login(busqueda.name);

    setError(false);

    navigate("/marvel", { replace: true });
  };

  return { busqueda, error, handleChange, handleSubmit };
};
