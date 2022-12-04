import React from "react";
import { Outlet } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const userAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = userAuth();
  return isAuth ? <Outlet /> : <HomeLayout />;
};

export default ProtectedRoutes;
