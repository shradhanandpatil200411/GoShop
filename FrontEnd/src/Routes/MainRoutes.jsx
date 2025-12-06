import Home from "../Pages/Home";
import AuthenticationPage from "../Pages/AuthenticationPage";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import AdminAuthRoute from "./AdminAuthRoute";
import CreateProduct from "../Admin/CreateProduct";
import ProductDetails from "../Pages/ProductDetails";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthenticationPage />} />
        <Route element={<AuthRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/product-detail/:id' element={<ProductDetails />} />
        </Route>
        <Route element={<AdminAuthRoute />}>
          <Route path='/create-product' element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainRoutes;
