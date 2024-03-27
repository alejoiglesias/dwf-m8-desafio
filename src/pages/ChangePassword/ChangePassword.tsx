import React from "react";
import { Body } from "../../ui/Body/Body";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./ChangePassword.css";
import { ChangePasswordForm } from "../../components/Forms/ChangePasswordForm/ChangePasswordForm";

export default function ChangePassword() {
  return (
    <Body>
      <Title className={styles["change-password__title"]}>Contraseña</Title>
      <ChangePasswordForm className={styles["change-password__form"]} />
    </Body>
  );
}
