import React from "react";
import styles from "./Bold.css";

interface BoldProps extends React.HTMLProps<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Bold({ children, className = "", ...props }: BoldProps) {
  const defaultClassName = styles.bold;
  const finalClassName = `${defaultClassName} ${className}`.trim();

  return (
    <p className={finalClassName} {...props}>
      {children}
    </p>
  );
}
