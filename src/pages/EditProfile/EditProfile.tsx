import React from "react";
import { EditProfileForm } from "../../components/Forms/EditProfileForm/EditProfileForm";
import { Body } from "../../ui/Body/Body";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./EditProfile.css";

export default function EditProfile() {
  return (
    <Body>
      <Title className={styles["edit-profile__title"]}>Datos personales</Title>
      <EditProfileForm className={styles["edit-profile__form"]} />
    </Body>
  );
}
