import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { petData, reportMenuState } from "../../../hooks/hooks";
import { sendReport } from "../../../lib/api";
import { Button } from "../../../ui/Button/Button";
import { Input } from "../../../ui/Input/Input";
import { Label } from "../../../ui/Label/Label";
import styles from "./ReportLostPetForm.css";

export function ReportLostPetForm() {
  const setShowReport = useSetRecoilState(reportMenuState);
  const pet = useRecoilValue(petData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const userId = pet.userId;
    const petName = pet.name;

    try {
      await sendReport({ name, phone, message, petName, userId });
      setShowReport(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.report__form}>
      <Label className={styles.report__label} htmlFor="name">
        NOMBRE
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        autoComplete="name"
        color="black"
        required
      />
      <Label className={styles.report__label} htmlFor="phone">
        TELÉFONO
      </Label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        autoComplete="tel"
        color="black"
        required
      />
      <Label className={styles.report__label} htmlFor="message">
        ¿DÓNDE LO VISTE?
      </Label>
      <textarea
        className={styles.report__input}
        id="message"
        name="message"
        required
      ></textarea>
      <Button className={styles.report__button} color="green" type="submit">
        Enviar información
      </Button>
    </form>
  );
}
