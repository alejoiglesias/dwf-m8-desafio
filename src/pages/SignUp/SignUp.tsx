import React from "react";
import { RegistrationForm } from "../../components/Forms/RegistrationForm/RegistrationForm";
import { Body } from "../../ui/Body/Body";
import { Paragraph } from "../../ui/Texts/Paragraph/Paragraph";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./SignUp.css";

export default function SignUp() {
  return (
    <Body>
      <Title className={styles.signup__title}>Registrarse</Title>
      <Paragraph className={styles.signup__info}>
        Ingresá los siguientes datos para realizar el registro
      </Paragraph>
      <RegistrationForm className={styles.signup__form} />
    </Body>
  );
}
