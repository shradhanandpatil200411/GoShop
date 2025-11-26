import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./Routes/MainRoutes";
import { useEffect } from "react";
import { asyncCurrentUserAction } from "./Store/Actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncCurrentUserAction(navigate));
  }, []);
  return (
    <div className='w-screen'>
      <Navbar />
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
