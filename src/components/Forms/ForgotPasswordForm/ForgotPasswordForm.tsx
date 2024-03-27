import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userEmail } from "../../../hooks/hooks";
import { sendRecoveryPasswordEmail } from "../../../lib/api";
import { Button } from "../../../ui/Button/Button";
import { Input } from "../../../ui/Input/Input";
import { Label } from "../../../ui/Label/Label";
import { Paragraph } from "../../../ui/Texts/Paragraph/Paragraph";
import formStyles from "../Forms.css";
import styles from "./ForgotPasswordForm.css";

type ForgotPasswordFormProps = {
  className: string;
};

export function ForgotPasswordForm({ className }: ForgotPasswordFormProps) {
  const [defaultEmail, setEmail] = useRecoilState(userEmail);
  const [error, setError] = useState("");
  const [notify, setNotify] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").toString();

    localStorage.setItem("email", email);
    setEmail(email);

    try {
      const data = await sendRecoveryPasswordEmail({ email });
      setError("");
      setNotify(data.message);
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
      <Label htmlFor="email">EMAIL</Label>
      <Input
        id="email"
        type="email"
        name="email"
        autoComplete="username"
        defaultValue={defaultEmail}
        required
      />
      <Button className={styles.form__button} type="submit">
        Enviar
      </Button>
    </form>
  );
}
