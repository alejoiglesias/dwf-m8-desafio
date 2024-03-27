import React, { ReactNode } from "react";
import styles from "./Button.css";

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
  color?: "blue" | "green" | "red" | "black";
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export function Button({
  color = "blue",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const defaultClassName = `${styles.button} ${styles[`button--${color}`]}`;
  const finalClassName = `${defaultClassName} ${className}`.trim();

  return (
    <button type={type} className={finalClassName} {...props}>
      {children}
    </button>
  );
}
