import React from "react";
import styles from "./Label.css";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  color?: string;
}

export function Label({ className, color = "black", ...props }: LabelProps) {
  const defaultClassName = `${styles.label} ${styles[`label--${color}`]}`;
  const finalClassName = `${defaultClassName} ${className}`.trim();

  return <label className={finalClassName} {...props} />;
}
