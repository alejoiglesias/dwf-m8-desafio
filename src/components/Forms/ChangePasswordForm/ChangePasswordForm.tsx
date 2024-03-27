import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../../hooks/hooks";
import { changePassword, resetPassword } from "../../../lib/api";
import { Button } from "../../../ui/Button/Button";
import { Label } from "../../../ui/Label/Label";
import { Paragraph } from "../../../ui/Texts/Paragraph/Paragraph";
import formStyles from "../Forms.css";
import styles from "./ChangePasswordForm.css";
import { Input } from "../../../ui/Input/Input";

type ChangePasswordFormProps = {
  className?: string;
};

export function ChangePasswordForm({ className }: ChangePasswordFormProps) {
  const [error, setError] = useState("");
  const [notify, setNotify] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = useRecoilValue(userToken);
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password").toString();
    const confirmPassword = formData.get("confirmPassword").toString();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (token) {
      try {
        const data = await changePassword({ password, token });
        setError("");
        setNotify(data.message);
      } catch (error) {
        setNotify("");
        setError(error.message);
      }
    }

    if (!token) {
      try {
        const data = await resetPassword({ password });
        setError("");
        setNotify(data.message);
      } catch (error) {
        setNotify("");
        setError(error.message);
      }
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
      <Label htmlFor="password">NUEVA CONTRASEÑA</Label>
      <Input
        id="password"
        type="password"
        name="password"
        minLength={8}
        autoComplete="new-password"
        required
      />

      <Label htmlFor="confirmPassword">CONFIRMAR CONTRASEÑA</Label>
      <Input
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        minLength={8}
        autoComplete="new-password"
        required
      />
      <Button className={styles.form__button} type="submit">
        Guardar
      </Button>
    </form>
  );
}
