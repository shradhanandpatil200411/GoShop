import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AuthRoute() {
  const getData = useSelector((store) => store.user);

  if (!getData.isLogout) {
    return (
      <>
        <h1 className='pt-80 text-5xl mx-auto w-fit'>Loading...</h1>
      </>
    );
  }

  return <>{getData?.isLogout ? <Outlet /> : <Navigate to='/' />}</>;
}

export default AuthRoute;
