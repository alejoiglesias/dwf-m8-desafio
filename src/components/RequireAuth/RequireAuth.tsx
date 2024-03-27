import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { petData, userToken } from "../../hooks/hooks";

export function RequireAuth({ children }) {
  const token = useRecoilValue(userToken);
  const pet = useRecoilValue(petData);

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  if (children.type.name === "EditReport") {
    if (!pet.name) {
      return <Navigate to="/reports" replace />;
    }
  }

  return children;
}
