import React from "react";
import { Link } from "react-router-dom";
import { MenuFooter } from "../../components/Menu/MenuFooter";
import { Body } from "../../ui/Body/Body";
import { Button } from "../../ui/Button/Button";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./Profile.css";

export default function Profile() {
  return (
    <Body>
      <Title className={styles.profile__title}>Mis Datos</Title>
      <Link to="/edit-profile">
        <Button
          className={`${styles.profile__button} ${styles["profile__button--data"]}`}
        >
          Modificar datos personales
        </Button>
      </Link>
      <Link to="/change-password">
        <Button
          className={`${styles.profile__button} ${styles["profile__button--password"]}`}
        >
          Modificar contraseña
        </Button>
      </Link>
      <MenuFooter />
    </Body>
  );
}
