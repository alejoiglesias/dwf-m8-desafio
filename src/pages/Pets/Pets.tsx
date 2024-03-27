import React from "react";
import { Body } from "../../ui/Body/Body";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./Pets.css";
import { PetsList } from "../../components/Lists/PetsLists/PetsList";

export default function Pets() {
  return (
    <Body>
      <Title className={styles.pets__title}>Mascotas perdidas cerca</Title>
      <PetsList />
    </Body>
  );
}
