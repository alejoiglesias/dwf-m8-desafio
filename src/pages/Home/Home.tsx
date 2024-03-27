import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import home from "../../assets/images/home.svg";
import { locationState } from "../../hooks/hooks";
import { Body } from "../../ui/Body/Body";
import { Button } from "../../ui/Button/Button";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const setLocation = useSetRecoilState(locationState);

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });

        localStorage.setItem(
          "location",
          JSON.stringify({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          })
        );
        navigate("/pets");
      },
      () => {
        navigate("/pets");
      }
    );
  };

  return (
    <Body>
      <img className={styles.home__img} src={home} />
      <Title className={styles.home__title}>Pet Finder App</Title>
      <p className={styles.home__subtitle}>
        Encontrá y reportá mascotas perdidas cerca de tu ubicación
      </p>
      <Button onClick={handleClick} className={styles.home__button}>
        Dar mi ubicación actual
      </Button>
    </Body>
  );
}
