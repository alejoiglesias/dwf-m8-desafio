import React from "react";
import styles from "./Link.css";

export function LinkTag({ children, className = "", ...props }) {
  const defaultClassName = styles.link;
  const finalClassName = `${defaultClassName} ${className}`.trim();

  return (
    <p className={finalClassName} {...props}>
      {children}
    </p>
  );
}
