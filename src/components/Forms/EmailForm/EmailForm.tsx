import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userEmail } from "../../../hooks/hooks";
import { Button } from "../../../ui/Button/Button";
import { Input } from "../../../ui/Input/Input";
import { Label } from "../../../ui/Label/Label";
import styles from "./EmailForm.css";

type EmailFormProps = {
  className: string;
};

export function EmailForm({ className }: EmailFormProps) {
  const navigate = useNavigate();
  const setEmail = useSetRecoilState(userEmail);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").toString();

    localStorage.setItem("email", email);
    setEmail(email);
    navigate("/sign-in");
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Label htmlFor="email">EMAIL</Label>
      <Input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <Button className={styles["form__button"]} type="submit">
        Siguiente
      </Button>
    </form>
  );
}
