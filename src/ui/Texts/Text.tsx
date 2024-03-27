// import React, { ElementType, ReactNode } from "react";
// import styles from "./Text.css";
// import { useNavigate } from "react-router-dom";

// type TextType =
//   | "title"
//   | "subtitle"
//   | "info"
//   | "text"
//   | "location"
//   | "uppercase"
//   | "link";

// interface TextProps extends React.HTMLProps<HTMLElement> {
//   type?: TextType;
//   children?: ReactNode;
//   className?: string;
// }

// interface Option {
//   tag: ElementType;
//   className: string;
// }

// const options: Record<TextType, Option> = {
//   title: { tag: "h1", className: styles.title },
//   subtitle: { tag: "h2", className: styles.subtitle },
//   info: { tag: "h3", className: styles.info },
//   text: { tag: "p", className: styles.text },
//   location: { tag: "p", className: styles.location },
//   uppercase: { tag: "p", className: styles.uppercase },
//   link: { tag: "a", className: styles.link },
// };

// export function TextComponent({
//   type = "text",
//   children,
//   className,
//   ...props
// }: TextProps) {
//   const { tag: Tag, className: defaultClassName } = options[type];
//   const finalClassName = `${defaultClassName} ${className || ""}`.trim();

//   return (
//     <Tag className={finalClassName} {...props}>
//       {children}
//     </Tag>
//   );
// }
