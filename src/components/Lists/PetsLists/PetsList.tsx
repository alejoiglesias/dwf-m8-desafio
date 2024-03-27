import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { locationState, lostPets, lostPetsAround } from "../../../hooks/hooks";
import { ReportsEmptyList } from "../ReportsLists/ReportsEmptyList";
import { LostPets } from "./LostPets";

export function PetsList() {
  const pets = useRecoilValueLoadable(lostPets);
  const petsAround = useRecoilValueLoadable(lostPetsAround);
  const location = useRecoilValue(locationState);

  if (!location && pets.state === "hasValue") {
    if (pets.contents.length === 0) {
      return <ReportsEmptyList type={"pets"} />;
    }
  }

  if (location && petsAround.state === "hasValue") {
    if (petsAround.contents.length === 0) {
      return <ReportsEmptyList type={"pets"} />;
    }
  }

  return <LostPets />;
}
