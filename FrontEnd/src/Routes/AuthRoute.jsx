import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AuthRoute() {
  const { data, isLoading } = useSelector((store) => store.user);

  if (isLoading) {
    return <h1 className='pt-80 text-5xl mx-auto w-fit'>Loading...</h1>;
  }

  if (!data) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthRoute;
