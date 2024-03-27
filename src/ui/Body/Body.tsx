import React from "react";
import styles from "./Body.css";

type BodyProps = {
  children: React.ReactNode;
};

export function Body({ children }: BodyProps) {
  return <div className={styles.body}>{children}</div>;
}
