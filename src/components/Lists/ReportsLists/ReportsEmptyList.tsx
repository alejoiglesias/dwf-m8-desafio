import React from "react";
import { useNavigate } from "react-router-dom";
import emptyImg from "../../../assets/images/empty.svg";
import { Button } from "../../../ui/Button/Button";
import { Paragraph } from "../../../ui/Texts/Paragraph/Paragraph";
import styles from "./ReportsLists.css";

type ReportsEmptyListProps = {
  type?: string;
};

export function ReportsEmptyList({ type }: ReportsEmptyListProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-report");
  };

  return (
    <div className={styles.reports__container}>
      {type === "pets" && (
        <Paragraph className={styles.reports__info}>
          No se han reportado mascotas cerca de tu ubicación
        </Paragraph>
      )}
      {!type && (
        <Paragraph className={styles.reports__info}>
          Aún no reportaste mascotas perdidas
        </Paragraph>
      )}
      <img className={styles.reports__img} src={emptyImg} />
      <Button className={styles.reports__button} onClick={handleClick}>
        Publicar reporte
      </Button>
    </div>
  );
}
