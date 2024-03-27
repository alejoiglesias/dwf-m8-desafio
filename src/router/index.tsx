import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { NoRequireAuth } from "../components/NoRequireAuth.tsx/NoRequireAuth";
import { RequireAuth } from "../components/RequireAuth/RequireAuth";
import Auth from "../pages/Auth/Auth";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import EditProfile from "../pages/EditProfile/EditProfile";
import EditReport from "../pages/EditReport/EditReport";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import NewReport from "../pages/NewReport/NewReport";
import Profile from "../pages/Profile/Profile";
import Reports from "../pages/Reports/Reports";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Pets from "../pages/Pets/Pets";

const withNoRequireAuth = (Component: React.ComponentType) => (
  <NoRequireAuth>
    <Component />
  </NoRequireAuth>
);

const withRequireAuth = (Component: React.ComponentType) => (
  <RequireAuth>
    <Component />
  </RequireAuth>
);

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pets" element={<Pets />} />
        <Route path="auth" element={withNoRequireAuth(Auth)} />
        <Route path="sign-in" element={withNoRequireAuth(SignIn)} />
        <Route path="sign-up" element={withNoRequireAuth(SignUp)} />
        <Route
          path="forgot-password"
          element={withNoRequireAuth(ForgotPassword)}
        />
        <Route
          path="reset-password"
          element={withNoRequireAuth(ChangePassword)}
        />
        <Route path="profile" element={withRequireAuth(Profile)} />
        <Route path="edit-profile" element={withRequireAuth(EditProfile)} />
        <Route
          path="change-password"
          element={withRequireAuth(ChangePassword)}
        />
        <Route path="reports" element={withRequireAuth(Reports)} />
        <Route path="new-report" element={withRequireAuth(NewReport)} />
        <Route path="edit-report" element={withRequireAuth(EditReport)} />
      </Route>
    </Routes>
  );
}
