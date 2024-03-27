import React from "react";
import { Link } from "react-router-dom";
import auth from "../../assets/images/auth.svg";
import { EmailForm } from "../../components/Forms/EmailForm/EmailForm";
import { Body } from "../../ui/Body/Body";
import { Paragraph } from "../../ui/Texts/Paragraph/Paragraph";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./Auth.css";

export default function Auth() {
  return (
    <Body>
      <img className={styles.auth__img} src={auth} />
      <Title className={styles.auth__title}>Ingresar</Title>
      <Paragraph className={styles.auth__info}>
        Ingresá tu email para continuar
      </Paragraph>
      <EmailForm className={styles.auth__form} />
      <div className={styles.auth__container}>
        <Paragraph>Aún no tenes cuenta?</Paragraph>
        <Link to="/sign-up">
          <Paragraph className={styles.auth__link}>Regístrate</Paragraph>
        </Link>
      </div>
    </Body>
  );
}
