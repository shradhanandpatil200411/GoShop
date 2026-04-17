import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import AuthenticationPage from "./Pages/AuthenticationPage";
import AuthRoute from "./Routes/AuthRoute";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import AdminAuthRoute from "./Routes/AdminAuthRoute";
import CreateProduct from "./Admin/CreateProduct";
import Profile from "./Pages/Profile";
import AiChatBot from "./Services/AiChatBot";

const roots = createBrowserRouter([
  {
    element: <MainRoutes />,
    children: [
      {
        path: "/",
        element: <AuthenticationPage />,
      },
      {
        path: "/home",
        element: (
          <AuthRoute>
            <Home />
            <AiChatBot />
          </AuthRoute>
        ),
      },
      {
        path: "/product-detail/:id",
        element: (
          <AuthRoute>
            <ProductDetails />
          </AuthRoute>
        ),
      },
      {
        path: "/create-product",
        element: (
          <AdminAuthRoute>
            <CreateProduct />
          </AdminAuthRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthRoute>
            <Profile />
          </AuthRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className='w-screen h-full bg-linear-to-r from-Deep-Navy-Blue to-cyan-800 '>
      <RouterProvider router={roots} />
    </div>
  );
}

export default App;
