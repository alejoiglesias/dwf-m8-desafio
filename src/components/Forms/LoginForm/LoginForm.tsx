import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userEmail, userToken } from "../../../hooks/hooks";
import { signIn } from "../../../lib/api";
import { Button } from "../../../ui/Button/Button";
import { Input } from "../../../ui/Input/Input";
import { Label } from "../../../ui/Label/Label";
import { Paragraph } from "../../../ui/Texts/Paragraph/Paragraph";
import formStyles from "../Forms.css";
import styles from "./LoginForm.css";

type LoginFormProps = {
  className: string;
};

export function LoginForm({ className }: LoginFormProps) {
  const [defaultEmail, setEmail] = useRecoilState(userEmail);
  const setToken = useSetRecoilState(userToken);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").toString();
    const password = formData.get("password").toString();

    localStorage.setItem("email", email);
    setEmail(email);

    try {
      const token = await signIn({ email, password });
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
        defaultValue={defaultEmail}
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
      <Link to="/forgot-password">
        <Paragraph className={styles["form__link"]}>
          Olvidé mi contraseña
        </Paragraph>
      </Link>
      <Button className={styles["form__button"]} type="submit">
        Acceder
      </Button>
    </form>
  );
}
