import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./Routes/MainRoutes";
import { useEffect } from "react";
import { asyncCurrentUserAction } from "./Store/Actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  gsap.registerPlugin(SplitText, useGSAP);
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
