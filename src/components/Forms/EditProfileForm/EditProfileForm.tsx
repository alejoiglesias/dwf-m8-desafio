import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userData, userToken } from "../../../hooks/hooks";
import { updateProfile } from "../../../lib/api";
import { Button } from "../../../ui/Button/Button";
import { Input } from "../../../ui/Input/Input";
import { Label } from "../../../ui/Label/Label";
import { Paragraph } from "../../../ui/Texts/Paragraph/Paragraph";
import formStyles from "../Forms.css";
import styles from "./EditProfileForm.css";

type EditProfileFormProps = {
  className?: string;
};

export function EditProfileForm({ className }: EditProfileFormProps) {
  const data = useRecoilValue(userData);
  const [error, setError] = useState("");
  const [notify, setNotify] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = useRecoilValue(userToken);
    const formData = new FormData(event.currentTarget);
    const fullname = formData.get("fullname").toString();
    const location = formData.get("location").toString();

    try {
      const newData = await updateProfile({ fullname, location, token });
      localStorage.setItem("data", JSON.stringify({ fullname, location }));
      setError("");
      setNotify(newData.message);
    } catch (error) {
      setNotify("");
      setError(error.message);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {error && (
        <Paragraph className={formStyles.form__error}>{error}</Paragraph>
      )}
      {notify && (
        <Paragraph className={formStyles.form__notify}>{notify}</Paragraph>
      )}
      <Label htmlFor="fullname">NOMBRE </Label>
      <Input
        id="fullname"
        name="fullname"
        autoComplete="name"
        defaultValue={data.fullname}
        required
      />
      <Label htmlFor="location">LOCALIDAD </Label>
      <Input
        id="location"
        name="location"
        autoComplete="street-address"
        defaultValue={data.location}
        required
      />
      <Button className={styles.form__button} type="submit">
        Guardar
      </Button>
    </form>
  );
}
