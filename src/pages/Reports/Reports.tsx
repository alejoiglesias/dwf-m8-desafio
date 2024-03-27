import React from "react";
import { ReportsList } from "../../components/Lists/ReportsLists/ReportsList";
import { Body } from "../../ui/Body/Body";
import { Title } from "../../ui/Texts/Title/Title";
import styles from "./Reports.css";

export default function Reports() {
  return (
    <Body>
      <Title className={styles.reports__title}>Mascotas reportadas</Title>
      <ReportsList />
    </Body>
  );
}
