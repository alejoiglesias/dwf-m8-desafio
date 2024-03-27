import React from "react";
import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
import { Body } from "../../ui/Body/Body";
import { Paragraph } from "../../ui/Texts/Paragraph/Paragraph";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./SignIn.css";

export default function SignIn() {
  return (
    <Body>
      <Title className={styles.signin__title}>Iniciar Sesión</Title>
      <Paragraph className={styles.signin__info}>
        Ingresá los siguientes datos para iniciar sesión
      </Paragraph>
      <LoginForm className={styles.signin__form} />
    </Body>
  );
}
