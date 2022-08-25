import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRouters } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import{PublicRoute} from './PublicRoute'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="login" element={<LoginPage />} /> */}

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <HeroesRouters />
              </PrivateRoute>
            }
          />
          {/* <Route path="/*" element={<HeroesRouters />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
