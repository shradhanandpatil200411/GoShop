import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { asyncCurrentUserAction } from "../Store/Actions/userActions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";

function MainRoutes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  gsap.registerPlugin(SplitText, useGSAP);
  useEffect(() => {
    dispatch(asyncCurrentUserAction(navigate));
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default MainRoutes;
