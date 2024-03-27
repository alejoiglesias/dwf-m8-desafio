import React from "react";
import { ForgotPasswordForm } from "../../components/Forms/ForgotPasswordForm/ForgotPasswordForm";
import { Body } from "../../ui/Body/Body";
import { Paragraph } from "../../ui/Texts/Paragraph/Paragraph";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./ForgotPassword.css";

export default function ForgotPassword() {
  return (
    <Body>
      <Title className={styles["forgot-password__title"]}>
        Recuperar contraseña
      </Title>
      <Paragraph className={styles["forgot-password__info"]}>
        Ingresá tu email para continuar
      </Paragraph>
      <ForgotPasswordForm className={styles["forgot-password__form"]} />
    </Body>
  );
}
