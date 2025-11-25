import Home from "../Pages/Home";
import AuthenticationPage from "../Pages/AuthenticationPage";
import { Route, Routes } from "react-router";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<AuthenticationPage />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
