import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userEmail, userToken } from "../../../hooks/hooks";
import { signUp } from "../../../lib/api";
import { Button } from "../../../ui/Button/Button";
import { Input } from "../../../ui/Input/Input";
import { Label } from "../../../ui/Label/Label";
import { Paragraph } from "../../../ui/Texts/Paragraph/Paragraph";
import styles from "./RegistrationForm.css";
import formStyles from "../Forms.css";

type RegistrationForm = {
  className: string;
};

export function RegistrationForm({ className }: RegistrationForm) {
  const setToken = useSetRecoilState(userToken);
  const setEmail = useSetRecoilState(userEmail);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").toString();
    const password = formData.get("password").toString();
    const confirmPassword = formData.get("confirmPassword").toString();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    localStorage.setItem("email", email);
    setEmail(email);

    try {
      const token = await signUp({ email, password });
      localStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {error && (
        <Paragraph className={formStyles["form__error"]}>{error}</Paragraph>
      )}
      <Label htmlFor="email">EMAIL</Label>
      <Input
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        required
      />
      <Label htmlFor="password">CONTRASEÑA</Label>
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
      <div className={styles["form__container"]}>
        <Paragraph>Ya tenés una cuenta?</Paragraph>
        <Link to="/sign-in">
          <Paragraph className={styles["form__link"]}>
            Iniciar sesión.
          </Paragraph>
        </Link>
      </div>
      <Button className={styles["form__button"]} type="submit">
        Enviar
      </Button>
    </form>
  );
}
