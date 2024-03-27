import React from "react";
import styles from "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  color?: string;
}

export function Input({ className, color = "white", ...props }: InputProps) {
  const defaultClassName = `${styles.input} ${styles[`input--${color}`]}`;
  const finalClassName = `${defaultClassName} ${className}`.trim();

  return <input className={finalClassName} {...props} />;
}
