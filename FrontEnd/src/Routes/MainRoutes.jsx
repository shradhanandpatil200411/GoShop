import Home from "../Pages/Home";
import AuthenticationPage from "../Pages/AuthenticationPage";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthenticationPage />} />
        <Route element={<AuthRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainRoutes;
