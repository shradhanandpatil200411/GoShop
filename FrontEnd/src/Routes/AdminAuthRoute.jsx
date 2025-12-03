import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminAuthRoute() {
  const { data, isLoading } = useSelector((store) => store.user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <Navigate to='/' />;
  }

  if (!data?.isAdmin) {
    return <Navigate to='/home' />;
  }

  return <Outlet />;
}
