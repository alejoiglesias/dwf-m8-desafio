import React from "react";
import styles from "./Title.css";

export function Title({ children = "", className = "", ...props }) {
  const defaultClassName = styles.title;
  const finalClassName = `${defaultClassName} ${className}`.trim();

  return (
    <h1 className={finalClassName} {...props}>
      {children}
    </h1>
  );
}
