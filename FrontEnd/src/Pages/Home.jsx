import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUserAction } from "../Store/Actions/userActions";

function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store?.user);

  useEffect(() => {
    dispatch(asyncCurrentUserAction());
  }, []);

  return (
    <>
      <div className=' h-screen text-4xl w-full pt-20'>
        Welcome {data?.fullName?.firstName} {data?.fullName?.lastName}
      </div>
    </>
  );
}

export default Home;
