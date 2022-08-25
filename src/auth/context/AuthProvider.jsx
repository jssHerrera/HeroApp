import { useReducer, createContext } from "react";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";
import { useEffect } from "react";
const AuthContext = createContext();


const ini = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {}, ini);

  const login = (name='') => {
    dispatch({
      type: types.login,
      payload: { name: name },
    });
  };

  const logout = () =>{
    dispatch({
      type: types.logout,
    })
  }

  useEffect(() => {
    if (!authState) {
      return
    }
    localStorage.setItem('user', JSON.stringify(authState))
  }, [authState])

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
