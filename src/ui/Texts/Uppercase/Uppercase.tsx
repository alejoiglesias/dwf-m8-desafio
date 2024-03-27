import React, { ReactNode } from "react";
import styles from "./Uppercase.css";

interface UppercaseProps {
  className: string;
  children?: ReactNode;
}

export function Uppercase({
  children,
  className = "",
  ...props
}: UppercaseProps) {
  const defaultClassName = styles.uppercase;
  const finalClassName = `${defaultClassName} ${className}`.trim();

  return (
    <p className={finalClassName} {...props}>
      {children}
    </p>
  );
}
