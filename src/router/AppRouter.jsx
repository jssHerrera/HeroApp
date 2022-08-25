import {
  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {LoginPage} from "../auth";
import { HeroesRouters } from "../heroes";


const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<HeroesRouters />} />

        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
