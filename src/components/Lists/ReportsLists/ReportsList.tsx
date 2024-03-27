import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { userPets } from "../../../hooks/hooks";
import { ReportsEmptyList } from "./ReportsEmptyList";
import { UserReportsList } from "./UserReportsList";

export function ReportsList() {
  const pets = useRecoilValueLoadable(userPets);

  if (pets.state === "hasError") {
    return <ReportsEmptyList />;
  }

  return (
    <div>
      {pets.contents.length > 0 ? <UserReportsList /> : <ReportsEmptyList />}
    </div>
  );
}
