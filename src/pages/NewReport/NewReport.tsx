import React from "react";
import { useSetRecoilState } from "recoil";
import { ReportForm } from "../../components/Forms/ReportForm/ReportForm";
import { petData } from "../../hooks/hooks";
import { Body } from "../../ui/Body/Body";
import { Paragraph } from "../../ui/Texts/Paragraph/Paragraph";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./NewReport.css";

export default function NewReport() {
  return (
    <Body>
      <Title className={styles["new-report__title"]}>Reportar mascota</Title>
      <Paragraph className={styles["new-report__info"]}>
        Ingresá la siguiente información para realizar el reporte de la mascota
      </Paragraph>
      <ReportForm className={styles["new-report__form"]} type="new" />
    </Body>
  );
}
