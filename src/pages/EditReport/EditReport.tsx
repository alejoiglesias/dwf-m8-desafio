import React, { useEffect } from "react";
import { ReportForm } from "../../components/Forms/ReportForm/ReportForm";
import { Body } from "../../ui/Body/Body";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./EditReport.css";
import { useRecoilValue } from "recoil";
import { petData } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

export default function EditReport() {
  const navigate = useNavigate();
  const pet = useRecoilValue(petData);

  useEffect(() => {
    if (!pet.name) {
      navigate("/reports");
    }
  }, []);

  return (
    <Body>
      <Title className={styles["edit-report__title"]}>
        Editar reporte de mascota
      </Title>
      <ReportForm className={styles["edit-report__form"]} type="edit" />
    </Body>
  );
}
