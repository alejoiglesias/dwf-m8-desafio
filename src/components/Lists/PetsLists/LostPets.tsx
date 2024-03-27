import React from "react";
import { useRecoilValue } from "recoil";
import { locationState, lostPets, lostPetsAround } from "../../../hooks/hooks";
import { Card } from "../../Card/Card";
import styles from "../PetsLists/PetsList.css";

type Pet = {
  id: string;
  name: string;
  location: string;
  last_location_lng: number;
  last_location_lat: number;
  photo_url: string;
  status: string;
  userId: string;
};

export function LostPets() {
  const location = useRecoilValue(locationState);
  const pets = useRecoilValue(lostPets);
  const petsAround = useRecoilValue(lostPetsAround);

  return (
    <div className={styles.pets__list}>
      {(location ? petsAround : pets).map((pet: Pet) => (
        <Card
          key={pet.name}
          id={pet.id}
          name={pet.name}
          location={pet.location}
          longitude={pet.last_location_lng}
          latitude={pet.last_location_lat}
          img={pet.photo_url}
          status={pet.status}
          userId={pet.userId}
          edit={false}
          report={true}
        />
      ))}
    </div>
  );
}
