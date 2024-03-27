import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import editIcon from "../../assets/icons/edit.svg";
import sirenIcon from "../../assets/icons/siren.svg";
import { petData, reportMenuState } from "../../hooks/hooks";
import { Button } from "../../ui/Button/Button";
import { Bold } from "../../ui/Texts/Bold/Bold";
import { Title } from "../../ui/Texts/Title/Title";
import { Report } from "../Report/Report";
import styles from "./Card.css";

type CardProps = {
  id: string;
  name: string;
  location: string;
  longitude: number;
  latitude: number;
  img: string;
  status: string;
  userId: string;
  edit?: boolean;
  report?: boolean;
};

export function Card({
  id,
  name,
  location,
  longitude,
  latitude,
  img,
  status,
  userId,
  edit = true,
  report = false,
}: CardProps) {
  const navigate = useNavigate();
  const setPetData = useSetRecoilState(petData);
  const [showReport, setShowReport] = useRecoilState(reportMenuState);

  const handleEditClick = () => {
    setPetData({
      id,
      name,
      location,
      longitude,
      latitude,
      img,
      status,
      userId,
    });
    navigate("/edit-report");
  };

  const handleReportClick = () => {
    setPetData({
      id,
      name,
      location,
      longitude,
      latitude,
      img,
      status,
      userId,
    });
    setShowReport(true);
  };

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={img} alt="edit icon" />
      <div className={styles.card__container}>
        <div className={styles.card__info}>
          <Title className={styles.card__name}>{name}</Title>
          <Bold className={styles.card__location}>{location}</Bold>
        </div>
        {edit && (
          <Button
            onClick={handleEditClick}
            className={`${styles.card__button} ${styles["card__button--edit"]}`}
          >
            Editar <img className={styles.card__edit} src={editIcon} />
          </Button>
        )}
        {report && (
          <Button
            onClick={handleReportClick}
            className={`${styles.card__button} ${styles["card__button--report"]}`}
            color="red"
          >
            Reportar <img className={styles.card__siren} src={sirenIcon} />
          </Button>
        )}
        {showReport && <Report />}
      </div>
    </div>
  );
}
