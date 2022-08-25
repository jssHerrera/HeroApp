import { useContext } from "react";

import AuthContext from "../context/AuthProvider";

export const UseAuthContext = () => {

  return useContext(AuthContext)
}

