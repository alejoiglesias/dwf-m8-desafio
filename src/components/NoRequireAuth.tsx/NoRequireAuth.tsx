import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userToken } from "../../hooks/hooks";

type NoRequireAuthProps = {
  children: React.ReactNode;
};

export function NoRequireAuth({ children }: NoRequireAuthProps) {
  const token = useRecoilValue(userToken);

  if (token) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}
