import React from "react";
import { useRecoilValue } from "recoil";
import { userPets } from "../../../hooks/hooks";
import { Card } from "../../Card/Card";
import styles from "./ReportsLists.css";

type Pet = {
  id: string;
  name: string;
  last_location: string;
  last_location_lng: number;
  last_location_lat: number;
  photo_url: string;
  status: string;
  userId: string;
};

export function UserReportsList() {
  const pets = useRecoilValue(userPets);

  return (
    <div className={styles.reports__list}>
      {pets.map((pet: Pet) => {
        return (
          <Card
            key={pet.id}
            id={pet.id}
            name={pet.name}
            location={pet.last_location}
            longitude={pet.last_location_lng}
            latitude={pet.last_location_lat}
            img={pet.photo_url}
            userId={pet.userId}
            status={pet.status}
          />
        );
      })}
    </div>
  );
}
