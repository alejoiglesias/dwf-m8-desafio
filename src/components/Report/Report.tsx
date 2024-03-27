import React from "react";
import closeIcon from "../../assets/icons/close.svg";
import { Title } from "../../ui/Texts/Title/Title";
import { ReportLostPetForm } from "../Forms/ReportLostPetForm/ReportLostPetForm";
import styles from "./Report.css";
import { useSetRecoilState } from "recoil";
import { reportMenuState } from "../../hooks/hooks";

export function Report() {
  const setShowReport = useSetRecoilState(reportMenuState);

  const handleClick = () => {
    setShowReport(false);
  };

  return (
    <div className={styles.report}>
      <div className={styles.report__container}>
        <img
          onClick={handleClick}
          className={styles.report__close}
          src={closeIcon}
        />
        <Title className={styles.report__title}></Title>
        <ReportLostPetForm />
      </div>
    </div>
  );
}
