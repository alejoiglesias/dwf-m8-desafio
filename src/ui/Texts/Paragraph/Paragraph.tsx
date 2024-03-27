import React from "react";
import styles from "./Paragraph.css";

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Paragraph({
  children,
  className = "",
  ...props
}: ParagraphProps) {
  const defaultClassName = styles.paragraph;
  const finalClassName = `${defaultClassName} ${className}`.trim();

  return (
    <p className={finalClassName} {...props}>
      {children}
    </p>
  );
}
